import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacoesComponent } from './components/locacoes/locacoes.component';
import { LocacaoCadastroComponent } from './components/locacao-cadastro/locacao-cadastro.component';
import { LocacaoDetalhesComponent } from './components/locacao-detalhes/locacao-detalhes.component';


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
     path: '', redirectTo: '/locacoes', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
