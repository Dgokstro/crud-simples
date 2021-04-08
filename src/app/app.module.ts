import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesEditComponent } from './clientes/clientes-edit/clientes-edit.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { ProdutosEditComponent } from './produtos/produtos-edit/produtos-edit.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { VendasEditComponent } from './vendas/vendas-edit/vendas-edit.component';
import { VendasListComponent } from './vendas/vendas-list/vendas-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ClientesPageComponent } from './clientes/clientes-page/clientes-page.component';
import { ProdutosHomeComponent } from './produtos/produtos-home/produtos-home.component';
import { VendasHomeComponent } from './vendas/vendas-home/vendas-home.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, ClientesEditComponent, ClientesListComponent, ProdutosEditComponent, ProdutosListComponent, VendasEditComponent, VendasListComponent, SideMenuComponent, TopBarComponent, FooterComponent, ClientesPageComponent, ProdutosHomeComponent, VendasHomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
