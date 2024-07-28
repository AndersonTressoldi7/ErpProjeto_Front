import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../../models/produto.model';
import { isEqual, cloneDeep } from 'lodash';
import { ProdutoService } from '../../../services/produtos/produtos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Pessoa } from '../../../models/pessoa';
import { PessoasService } from '../../../services/pessoas/pessoas.service';
import { CadastroProdutosComponent } from '../../produtos/cadastro-produtos/cadastro-produtos.component';
import { CadastroPessoasComponent } from '../cadastro-pessoas/cadastro-pessoas.component';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrl: './listagem-pessoas.component.scss'
})
export class ListagemPessoasComponent {
 

  public pessoas: Pessoa[] = [];
  public pessoa!: Pessoa;
  public id! :number;
  

  constructor(private pessoaService: PessoasService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarPessoas();
  }
  carregarPessoas(): void {
    this.pessoaService.buscarTodasAsPessoas().subscribe(
      (data: Pessoa[]) => {
        this.pessoas = data;
        console.log(this.pessoas);
      },
      error => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }

  cadastrarNovaPessoa(){
    console.log('funcao de abrir');
     const dialogRef = this.dialog.open(CadastroPessoasComponent, {
      width: '80%',
      maxWidth: '2000px',
      height: '95%',
      maxHeight: '2000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carregarPessoas();
    });
  }

 async abrirPessoa(id:number){

  console.log('abrindo...');

    await this.pessoaService.buscarPessoaPeloId(id).subscribe(
      (data: Pessoa) =>{
        this.pessoa = data;

       const dialogRef =  this.dialog.open(CadastroPessoasComponent, {
        width: '80%',
        maxWidth: '2000px',
        height: '95%',
        maxHeight: '2000px',
        data: this.pessoa
        });

        dialogRef.afterClosed().subscribe(result => {
          setTimeout(() => {
            this.carregarPessoas();
          }, 3000);
  
        });
      },
      error => {
        console.error('Erro ao carregar produto', error);
      }
    )

    
    
  }

  teste(){
    console.log('teste');
  }
}