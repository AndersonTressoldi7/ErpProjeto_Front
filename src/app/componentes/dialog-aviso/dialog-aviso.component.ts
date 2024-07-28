
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-aviso',
  templateUrl: './dialog-aviso.component.html',
  styleUrl: './dialog-aviso.component.scss'
})
export class DialogAvisoComponent {

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: { mensagem: string },
  private dialogRef: MatDialogRef<DialogAvisoComponent>){}
  


}

