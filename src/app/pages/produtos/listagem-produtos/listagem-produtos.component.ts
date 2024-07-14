import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produtos/produtos.service';
import { Produto } from '../../../models/produto.model';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }
  carregarProdutos(): void {
    this.produtoService.TodosOsProdutos().subscribe(
      (data: Produto[]) => {
        this.produtos = data;
        console.log(this.produtos);
      },
      error => {
        console.error('Erro ao carregar produtos', error);
      }
    );
  }
}