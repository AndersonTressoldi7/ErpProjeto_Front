import { MatDialog } from "@angular/material/dialog";
import { DialogPerguntasComponent } from "./app/componentes/dialog-perguntas/dialog-perguntas.component";
import { DialogAvisoComponent } from "./app/componentes/dialog-aviso/dialog-aviso.component";


export class utils{
    
    static exibirPergunta(dialog: MatDialog, mensagem: string): Promise<boolean>{
        const dialogRef = dialog.open(DialogPerguntasComponent,{
            data: {mensagem: mensagem },
            width: '500px',
            height: '150px'
        })

        return dialogRef.afterClosed().toPromise();
    }

    static exibirAviso(dialog: MatDialog, mensagem: string){
        const dialogRef = dialog.open(DialogAvisoComponent,{
            data: {mensagem: mensagem },
            width: '500px',
            height: '150px'
        })

        return dialogRef.afterClosed().toPromise();
    }
}