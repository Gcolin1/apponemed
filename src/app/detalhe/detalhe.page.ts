import { AlertController, NavController } from '@ionic/angular';
import { DetalheService } from './detalhe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaMedicoService } from './../lista-medicos/lista-medico.service';
import { Medico } from './../Medico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  public medicoDetalhe : Medico[] = []
  id : any

  constructor(private medicoService : ListaMedicoService, private route : ActivatedRoute, private detalheService : DetalheService, private alert : AlertController, private router : Router, private navCtrl: NavController) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.buscarMedicoPorId()
  }

  async Alert() {
    const alert = await this.alert.create({
      header: 'Excluido',
      message: 'dados excluidos com sucesso',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertCancel() {
    const alert = await this.alert.create({
      header: 'Cancelado',
      message: 'Exclusão cancelada',
      buttons: ['OK']
    });

    await alert.present();
  }

  buscarMedicoPorId(){
    return this.medicoService.buscarMedicoId(this.id).subscribe(res => {
      console.log(res)
      this.medicoDetalhe = [res]
    })
  }

  async deletarMedicoId(){
    const alertc = await this.alert.create({
      header: 'Confirmação',
      message: 'Você tem certeza que deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.AlertCancel
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.detalheService.DeletarMedicoId(this.id).subscribe((res) => {
              console.log(res)
              this.Alert()
              window.location.reload();
              this.navCtrl.navigateForward('/lista-medicos');
            })
          }
        }
      ]
    });

    await alertc.present();
  }
}

