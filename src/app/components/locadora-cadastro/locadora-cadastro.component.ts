import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Locadora } from 'src/models/locadora';

@Component({
  selector: 'app-locadora-cadastro',
  templateUrl: './locadora-cadastro.component.html',
  styleUrls: ['./locadora-cadastro.component.css']
})
export class LocadoraCadastroComponent implements OnInit {

  locadoraForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locadoraForm = this.formBuilder.group({
      nome: [null, Validators.required],
      cnpj: [null, Validators.required],
      email: [null, Validators.required],
      cidade: [null, Validators.required],
    });
    this.getData();
  }

  async getData() {
    this.isLoadingResults = false;
    console.debug('No issues, I will wait until promise is resolved..');
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addLocadora(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/locadora-detalhes', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
