import { Component, OnInit } from '@angular/core';
import { utils } from '../../../utils';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrl: './pdv.component.scss'
})
export class PdvComponent{

  public produtos: produtos[] = [];
  public codigoProduto: any;
  public totalVenda: number = 0;
  public totalDescontos: number = 0;
  public totalAcrescimos: number = 0;
  public confirmacao:boolean = false;

  constructor(private dialog: MatDialog, private router: Router){}

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

  async descartarVenda(){
    this.confirmacao = await utils.exibirPergunta(this.dialog, "Deseja realmente cancelar esta venda?");
    
    if(this.confirmacao){
      this.produtos = [];
      this.totalVenda = 0;
    }
  }

  async sairDoPdv(){
    this.confirmacao = await utils.exibirPergunta(this.dialog, "Deseja realmente sair do PDV?");
    
    if(this.confirmacao){
      this.router.navigate(['/home']);
    }
    
  }
  

}

interface produtos {
  nome: string;
  preco: number;
  quantidade: number;
}

