import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pessoa } from '../../../models/pessoa';
import { PessoasService } from '../../../services/pessoas/pessoas.service';
import { isEqual, cloneDeep } from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cidade } from '../../../models/cidade';
import { CidadesService } from '../../../services/cidades/cidades.service';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.scss']
})
export class CadastroPessoasComponent implements OnInit {
  pessoaOriginal: Pessoa;
  editando: boolean = false;
  public form!: FormGroup;
  public proximoId!: number;
  public formularioEvalido: boolean = true;
  public cidades!: Cidade[];

  constructor(
    public dialogRef: MatDialogRef<CadastroPessoasComponent>,
    @Inject(MAT_DIALOG_DATA) public pessoa: Pessoa,
    private pessoaService: PessoasService,
    private fb: FormBuilder,
    private cidadeService: CidadesService
  ) {
    this.pessoaOriginal = cloneDeep(pessoa);
  }

  ngOnInit(): void {

    this.buscarCidades();
    
    if (!this.pessoa) {
      this.pessoaService.retornaProximoId().subscribe(
        (response: number) => {
          this.proximoId = response;
          console.log('o proximo id é : ', this.proximoId);
          this.form.get('id')?.setValue(this.proximoId);
        },
        error => {
          console.log('erro: ', error);
        }
      );
    }
    
    console.log('a pessoa cliente: ', this.pessoa?.cliente);
    console.log('a pessoa é: ', this.pessoa?.funcionario);

    this.form = this.fb.group({
      id: [{ value: this.pessoa?.id ?? '', disabled: true }],
      nome: [this.pessoa?.nome || '', Validators.required],
      cpfCnpj: [this.pessoa?.cpfCnpj || '', Validators.required],
      sexo: [this.pessoa?.sexo || '', Validators.required],
      cliente: [this.pessoa?.cliente || false],
      funcionario: [this.pessoa?.funcionario || false],
      fornecedor: [this.pessoa?.fornecedor || false],
      cidade: [this.pessoa?.cidade_nome || '', Validators.required],
      bairro: [this.pessoa?.bairro || '', Validators.required],
      rua: [this.pessoa?.rua || '', Validators.required],
      dataNascimento: [this.pessoa?.dataNascimento || '', Validators.required]
    });

    if (this.pessoa) {
      this.editando = true;
    }

  
  }

  salvarPessoa() {
    const comparaObjetos = isEqual(this.pessoaOriginal, this.pessoa);
    const pessoa: Pessoa = this.form.value;
    pessoa.id = this.form.get('id')?.value;

    if (comparaObjetos && this.editando) {
      this.pessoaService.editarPessoa(pessoa).subscribe();
    } else {
      this.pessoaService.cadastrarPessoa(pessoa).subscribe();
    }

    this.onClose();
  }

  buscarCidades(): void{
   this.cidadeService.buscarTodasAsCidades().subscribe(
      (dados: Cidade[]) => {
        this.cidades = dados;
        console.log(this.cidades);
      },
      (erro) => {
        console.error('erro ao buscar cidades', erro);
      }
    );
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
