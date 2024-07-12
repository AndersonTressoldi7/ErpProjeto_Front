
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-perguntas',
  templateUrl: './dialog-perguntas.component.html',
  styleUrl: './dialog-perguntas.component.scss'
})
export class DialogPerguntasComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { mensagem: string },
  private dialogRef: MatDialogRef<DialogPerguntasComponent>){}

  fecharDialog(resposta: boolean){
    return this.dialogRef.close(resposta);
   }


}
