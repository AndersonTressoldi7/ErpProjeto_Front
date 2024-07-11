import { MatDialog } from "@angular/material/dialog";
import { DialogPerguntasComponent } from "./app/componentes/dialog-perguntas/dialog-perguntas.component";


export class utils{
    
    static exibirPergunta(dialog: MatDialog, mensagem: string): Promise<boolean>{
        const dialogRef = dialog.open(DialogPerguntasComponent,{
            data: {mensagem: mensagem },
            width: '500px',
            height: '150px'
        })

        return dialogRef.afterClosed().toPromise();

    }
}