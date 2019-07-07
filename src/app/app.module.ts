import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';
import { LocadoraEdicaoComponent } from './components/locadora-edicao/locadora-edicao.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';
import { ClienteEdicaoComponent } from './components/cliente-edicao/cliente-edicao.component';



import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    LocacoesComponent,
    LocacaoCadastroComponent,
    LocacaoDetalhesComponent,
    LocadorasComponent,
    LocadoraCadastroComponent,
    LocadoraDetalhesComponent,
    LocadoraEdicaoComponent,
    ClientesComponent,
    ClienteCadastroComponent,
    ClienteDetalhesComponent,
    ClienteEdicaoComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
