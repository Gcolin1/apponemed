import { CadastroMedicoService } from './cadastro-medico.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-medicos',
  templateUrl: './cadastro-medicos.page.html',
  styleUrls: ['./cadastro-medicos.page.scss'],
})
export class CadastroMedicosPage implements OnInit {

  //variavel cadastro do tipo formgroup
  cadastro: FormGroup;

  constructor(private service : CadastroMedicoService, private alertController: AlertController) {

    //guardando dados do formulario na variavel cadastro
    this.cadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      crm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      especialidade: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
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

   //função que envia dados do formulario para a função cadastrar do service
   onSubmit(cadastro : FormGroup) {
    console.log(JSON.stringify(this.cadastro.value))
    if(this.cadastro.valid){
      this.service.cadastrar(this.cadastro.value).subscribe(resposta => {
        console.log(resposta)
      })
      cadastro.reset()
        this.Alert()
        
    }else{
      this.AlertError()
    }
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Cadastro efetuado',
      message: 'Seu cadastro foi realizado com sucesso!',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Cadastro invalido',
      message: 'Dados cadastrais invalidos',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  ngOnInit() {

  }

}
