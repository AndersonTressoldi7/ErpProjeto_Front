import { Component, OnInit } from '@angular/core';
import { utils } from '../../../utils';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produtos/produtos.service';
import { Produto } from '../../models/produto.model';
import { FormBuilder, FormGroup } from '@angular/forms';


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
  public confirmacao:boolean = false;
  public novoProduto!: Produto;
  public quantidade: number = 1;
  form!: FormGroup;
  public desconto = 0;

  constructor(private dialog: MatDialog, private router: Router, private produtoService: ProdutoService, private fb: FormBuilder){}

  adicionarProduto(codigoProduto: any, quantidade: any){
          

      if(codigoProduto && quantidade){

        this.produtoService.buscarProdutoPeloCodigo(codigoProduto).subscribe(
          (data: Produto) => {
            console.log(data);
            this.novoProduto = data;
            this.produtos.push(this.novoProduto);
            this.totalVenda = this.totalVenda + this.novoProduto.preco * quantidade;
          }
        );
      }else{
        utils.exibirAviso(this.dialog, 'Dados inválidos');
      }

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

  ngOnInit(): void {
    this.form = this.fb.group({
      codigoProduto: [''],
      quantidade: ['']
    });

  
  }
  

}

interface produtos {
  nome: string;
  preco: number;
  quantidade: number;
}

