import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvComponent } from './pages/pdv/pdv.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pdv', component: PdvComponent},
  {path: 'navbar', component: NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
