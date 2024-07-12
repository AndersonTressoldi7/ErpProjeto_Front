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


@NgModule({
  declarations: [
    AppComponent,
    PdvComponent,
    DialogPerguntasComponent,
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
