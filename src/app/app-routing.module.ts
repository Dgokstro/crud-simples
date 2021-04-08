import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesPageComponent } from './clientes/clientes-page/clientes-page.component';
import { HomeComponent } from './home/home.component';
import { ProdutosHomeComponent } from './produtos/produtos-home/produtos-home.component';
import { VendasHomeComponent } from './vendas/vendas-home/vendas-home.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesPageComponent },
  { path: 'produtos', component: ProdutosHomeComponent },
  { path: 'vendas', component: VendasHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
