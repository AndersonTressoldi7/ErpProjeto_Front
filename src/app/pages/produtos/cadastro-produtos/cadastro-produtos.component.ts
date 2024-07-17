import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Produto } from '../../../models/produto.model';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent {

  constructor(
    public dialogRef: MatDialogRef<CadastroProdutosComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produto 
  ) { }

  salvarProduto(){
    
    console.log('teste' , this.produto);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
