import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produtos/produtos.service';
import { Produto } from '../../../models/produto.model';
import { MatDialog } from '@angular/material/dialog';
import { CadastroProdutosComponent } from '../cadastro-produtos/cadastro-produtos.component';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent implements OnInit {

  public produtos: Produto[] = [];
  public produto!: Produto;
  public id! :number;
  

  constructor(private produtoService: ProdutoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void {
    this.produtoService.buscarTodosOsProdutos().subscribe(
      (data: Produto[]) => {
        this.produtos = data;
        console.log(this.produtos);
      },
      error => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }

  cadastrarNovoProduto(){
    console.log('funcao de abrir');
     const dialogRef = this.dialog.open(CadastroProdutosComponent, {
      width: '80%',
      maxWidth: '2000px',
      height: '95%',
      maxHeight: '2000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.carregarProdutos();
    });
  }

 async abrirProduto(id:number){

  console.log('abrindo...');

    await this.produtoService.buscarProdutoPeloId(id).subscribe(
      (data: Produto) =>{
        this.produto = data;

       const dialogRef =  this.dialog.open(CadastroProdutosComponent, {
        width: '80%',
        maxWidth: '2000px',
        height: '95%',
        maxHeight: '2000px',
        data: this.produto
        });

        dialogRef.afterClosed().subscribe(result => {
          setTimeout(() => {
            this.carregarProdutos();
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