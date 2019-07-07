import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';

import { LocadorasComponent } from './components/locadoras/locadoras.component';
import { LocadoraCadastroComponent } from './components/locadora-cadastro/locadora-cadastro.component';
import { LocadoraDetalhesComponent } from './components/locadora-detalhes/locadora-detalhes.component';

import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteDetalhesComponent } from './components/cliente-detalhes/cliente-detalhes.component';

import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
{
    path: 'locacoes', component: LocacoesComponent, data: { title: 'Lista de Locacoes' }
  },
  {
    path: 'locacao-detalhes/:id', component: LocacaoDetalhesComponent, data: { title: 'Detalhes da Locacao' }
  },
  {
    path: 'locacao-cadastro', component: LocacaoCadastroComponent, data: { title: 'Cadastro Locacao' }
  },
  {
    path: 'locadoras', component: LocadorasComponent, data: { title: 'Lista de Locadoras' }
  },
  {
    path: 'locadora-detalhes/:id', component: LocadoraDetalhesComponent, data: { title: 'Detalhes da Locadora' }
  },
  {
    path: 'locadora-cadastro', component: LocadoraCadastroComponent, data: { title: 'Cadastro Locadora' }
  },
  {
    path: 'clientes', component: ClientesComponent, data: { title: 'Lista de Clientes' }
  },
  {
    path: 'cliente-detalhes/:id', component: ClienteDetalhesComponent, data: { title: 'Detalhes da Cliente' }
  },
  {
    path: 'cliente-cadastro', component: ClienteCadastroComponent, data: { title: 'Cadastro Cliente' }
  },
  {
    path: 'index', component: IndexComponent, data: { title: 'Sistema de Locação de Bicicletas' }
  },
  { 
     path: '', redirectTo: '/index', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
