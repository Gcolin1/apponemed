import { Router } from '@angular/router';
import { CadastroPlanoService } from './cadastro-plano.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-plano',
  templateUrl: './cadastro-plano.page.html',
  styleUrls: ['./cadastro-plano.page.scss'],
})
export class CadastroPlanoPage implements OnInit {

  cadastro: FormGroup;

  constructor(private service : CadastroPlanoService, private alertController: AlertController, private router : Router) {

    this.cadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      cnpj: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]),
      coberturas: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required)
    })
  }

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
