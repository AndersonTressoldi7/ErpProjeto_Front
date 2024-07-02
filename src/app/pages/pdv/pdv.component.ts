import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrl: './pdv.component.scss'
})
export class PdvComponent implements OnInit{

  public produtos: produtos[] = [];
  public codigoProduto: any;
  public totalVenda: number = 0;
  public totalDescontos: number = 0;
  public totalAcrescimos: number = 0;

  ngOnInit(): void {
    
  }

  adicionarProduto(codigoProduto: string){

    const novoProduto: produtos = {
      nome: codigoProduto,
      preco: 1,
      quantidade: 1
    };

    this.totalVenda = this.totalVenda + novoProduto.preco;
    this.produtos.push(novoProduto);

    this.codigoProduto = '';
  }

  descartarVenda(){
    this.produtos = [];
    this.totalVenda = 0;

  }

}

interface produtos {
  nome: string;
  preco: number;
  quantidade: number;
}

