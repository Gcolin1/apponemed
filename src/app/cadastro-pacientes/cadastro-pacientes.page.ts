import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroPacienteService } from './cadastro-pacientes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.page.html',
  styleUrls: ['./cadastro-pacientes.page.scss'],
})
export class CadastroPacientesPage implements OnInit {

  cadastro: FormGroup;

  constructor(private service : CadastroPacienteService, private alertController: AlertController) { 

    //guardando dados do formulario na variavel cadastro
    this.cadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
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

  onSubmit(cadastro: FormGroup) {
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
