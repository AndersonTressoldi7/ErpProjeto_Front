import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdvComponent } from './pages/pdv/pdv.component';
import { ButtonModule } from 'primeng/button';
import { PrimeIcons } from 'primeng/api';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogPerguntasComponent } from './componentes/dialog-perguntas/dialog-perguntas.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    PdvComponent,
    DialogPerguntasComponent,
    HomeComponent,
    NavBarComponent,
    ListagemProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
