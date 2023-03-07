import { CadastroMedicoService } from './cadastro-medico.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.page.html',
  styleUrls: ['./cadastro-medicos.page.scss'],
})
export class CadastroMedicosPage implements OnInit {

  cadastro: FormGroup;

  constructor(private service : CadastroMedicoService) {

    this.cadastro = new FormGroup({
      nome: new FormControl(''),
      email: new FormControl(''),
      crm: new FormControl(''),
      especialidade: new FormControl(''),
      telefone: new FormControl(''),
      endereco: new FormGroup({
        complemento: new FormControl(''),
        numero: new FormControl(''),
        logradouro: new FormControl(''),
        cep: new FormControl(''),
        cidade: new FormControl(''),
        bairro: new FormControl(''),
        uf: new FormControl(''),
      })
    })
   }

   onSubmit() {
    console.log(JSON.stringify(this.cadastro.value))

    this.service.cadastrar(this.cadastro.value).subscribe(resposta => {
      console.log(resposta)

      
    })
  }

  ngOnInit() {

  }

}
