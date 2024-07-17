import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produtos/produtos.service';
import { Produto } from '../../../models/produto.model';
import { MatDialog } from '@angular/material/dialog';
import { CadastroProdutosComponent } from '../cadastro-produtos/cadastro-produtos.component';


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

  abreCadastroProduto(){
     this.dialog.open(CadastroProdutosComponent, {
      width: '80%',
      maxWidth: '2000px',
      height: '90%',
      maxHeight: '2000px'
    });
  }

  abrirProduto(id:number){

    this.produtoService.buscarProdutoEspecifico(id).subscribe(
      (data: Produto) =>{
        this.produto = data;
        console.log(this.produto);
      },
      error => {
        console.error('Erro ao carregar produto', error);
      }
    )

    if(this.produto){
      this.dialog.open(CadastroProdutosComponent, {
        width: '80%',
        maxWidth: '2000px',
        height: '90%',
        maxHeight: '2000px',
        data: this.produto
      });
    }


  }
}