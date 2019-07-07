import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Locadora } from 'src/models/locadora';
import { Locacao } from 'src/models/locacao';
import { Cliente } from 'src/models/cliente';

@Component({
  selector: 'app-locacao-detalhes',
  templateUrl: './locacao-detalhes.component.html',
  styleUrls: ['./locacao-detalhes.component.css']
})
export class LocacaoDetalhesComponent implements OnInit {

  locacao: Locacao = { id: '', data: '', locadora: new Locadora(), cliente: new Cliente() };
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  async getData(id) {
    this.locacao = await this.api.getLocacao(id).toPromise();
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }
  ngOnInit() {
    this.getData(this.route.snapshot.params['id']);
  }

  deleteLocacao(id) {
    this.isLoadingResults = true;
    this.api.deleteLocacao(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/locacoes']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
