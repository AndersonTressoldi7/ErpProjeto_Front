import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../../models/produto.model';
import { isEqual, cloneDeep } from 'lodash';
import { ProdutoService } from '../../../services/produtos/produtos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  produtoOriginal: Produto;
  editando: boolean = false;
  public form!: FormGroup;
  public proximoId!: number;
  public formularioEvalido: boolean = true;
  

  constructor(
    public dialogRef: MatDialogRef<CadastroProdutosComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produto,
    private produtoService: ProdutoService,
    private fb: FormBuilder,
  ) {
    this.produtoOriginal = cloneDeep(produto);
   
  }

  ngOnInit(): void {

    if(!this.produto)
    this.produtoService.retornaProximoId().subscribe(
      (response: number) => {
       this.proximoId = response; 
       console.log('o proximo id é : ', this.proximoId);
       this.form.get('id')?.setValue(this.proximoId);
      },
      error => {
       console.log('erro: ', error);
      }
    );

    this.form = this.fb.group({
      id: [{ value: this.produto?.id ?? '', disabled: true }],
      codigoBarras: [this.produto?.codigoBarras || '', Validators.required],
      nome: [this.produto?.nome || '', Validators.required],
      observacao: [this.produto?.observacao || ''],
      categoria: [this.produto?.categoria || '', Validators.required],
      marca: [this.produto?.marca || '', Validators.required],
      sku: [this.produto?.sku || '', Validators.required],
      preco: [this.produto?.preco || '', Validators.required],
      quantidade: [this.produto?.quantidade || '', Validators.required],
      unidadeMedida: [this.produto?.unidadeMedida || '', Validators.required],
      peso: [this.produto?.peso || '', Validators.required],
      dimensoes: [this.produto?.dimensoes || '', Validators.required],
      dataEntradaEstoque: [this.produto?.dataEntradaEstoque || '', Validators.required],
      status: [this.produto?.status || '', Validators.required],
      referencia: [this.produto?.referencia || '', Validators.required]
    });

    if (this.produto) {
      this.editando = true;
    }

  }

 

  salvarProduto() {
    const comparaObjetos = isEqual(this.produtoOriginal, this.produto);
    const produto: Produto = this.form.value;
    produto.id = this.form.get('id')?.value;



    if (comparaObjetos && this.editando) {
      this.produtoService.editarProduto(produto).subscribe();
    } else {
      this.produtoService.cadastrarProduto(produto).subscribe();
    }

  
    this.onClose();
  
  }

 
  onClose(): void {
    this.dialogRef.close();
  }
}
