import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastroEnfermeirosService } from './cadastro-enfermeiros.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-enfermeiros',
  templateUrl: './cadastro-enfermeiros.page.html',
  styleUrls: ['./cadastro-enfermeiros.page.scss'],
})
export class CadastroEnfermeirosPage implements OnInit {
  cadastro: FormGroup;

  constructor(private service : CadastroEnfermeirosService, private alertController: AlertController, private router : Router) {

    this.cadastro = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      cre: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cpf: new FormControl('', Validators.required),
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

   onSubmit(cadastro : FormGroup) {
    console.log(JSON.stringify(this.cadastro.value))
    if(this.cadastro.valid){
      this.service.cadastrar(this.cadastro.value).subscribe(resposta => {
        console.log(resposta)
      })
      cadastro.reset()
        this.Alert()
        this.router.navigateByUrl('home')
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
