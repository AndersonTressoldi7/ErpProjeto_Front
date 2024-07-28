import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdvComponent } from './pages/pdv/pdv.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';
import { CadastroProdutosComponent } from './pages/produtos/cadastro-produtos/cadastro-produtos.component';
import { ListagemPessoasComponent } from './pages/pessoas/listagem-pessoas/listagem-pessoas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pdv', component: PdvComponent},
  {path: 'navbar', component: NavBarComponent},
  {path: 'listaProdutos', component: ListagemProdutosComponent},
  {path: 'cadastroProdutos', component: CadastroProdutosComponent},
  {path: 'listaPessoas', component: ListagemPessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
