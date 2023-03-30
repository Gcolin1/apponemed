import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AgendarService } from './agendar.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  agendamento: FormGroup;

  constructor(private service : AgendarService, private alertController: AlertController, private router : Router) {

    this.agendamento = new FormGroup({
      paciente: new FormControl('', Validators.required),
      data: new FormControl('', Validators.required),
      horario: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      especialidade: new FormControl('', Validators.required)
    })

  }

  ngOnInit() {
  }

  onSubmit(cadastro : FormGroup) {
    console.log(JSON.stringify(this.agendamento.value))
    if(this.agendamento.valid){
      this.service.cadastrar(this.agendamento.value).subscribe(resposta => {
        console.log(resposta)
    })
      cadastro.reset()
        this.Alert()
        this.router.navigateByUrl('/tabs/home')
    }else{
      this.AlertError()
    }
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Agendamento efetuado',
      message: 'Seu agendamento foi realizado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Agendamento invalido',
      message: 'Dados para agenda invalidos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
