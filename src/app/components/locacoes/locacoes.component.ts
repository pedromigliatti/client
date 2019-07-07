import { Component, OnInit } from '@angular/core';
import { Locacao } from 'src/models/locacao';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-locacoes',
  templateUrl: './locacoes.component.html',
  styleUrls: ['./locacoes.component.css']
})
export class LocacoesComponent implements OnInit {

  displayedColumns: string[] = ['data', 'cliente', 'locadora'];
  locacoes: Locacao[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.getData();
    }
  async getData() {
    this.locacoes = await this.api.getLocacoes().toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

}
