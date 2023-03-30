import { AlertController, NavController } from '@ionic/angular';
import { DetalheEnfermeiroService } from './detalhe-enfermeiro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfermeiro } from '../Enfermeiro';
import { ListaEnfermeirosService } from '../lista-enfermeiros/lista-enfermeiros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-enfermeiro',
  templateUrl: './detalhe-enfermeiro.page.html',
  styleUrls: ['./detalhe-enfermeiro.page.scss'],
})
export class DetalheEnfermeiroPage implements OnInit {

  public enfermeiroDetalhe : Enfermeiro[] = []
  id : any

  constructor(private enfermeiroService : ListaEnfermeirosService, private route : ActivatedRoute, private DetalheEnfermeiroService : DetalheEnfermeiroService, private alert : AlertController, private router : Router, private navCtrl: NavController) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.buscarEnfermeiroPorId()
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

  buscarEnfermeiroPorId(){
    return this.enfermeiroService.buscarEnfermeiroId(this.id).subscribe(res => {
      console.log(res)
      this.enfermeiroDetalhe = [res]
    })
  }

  async deletarEnfermeiroId(){
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
            this.DetalheEnfermeiroService.DeletarEnfermeiroId(this.id).subscribe((res) => {
              console.log(res)
              this.Alert()
              window.location.reload();
              this.navCtrl.navigateForward('/lista-enfermeiros');
            })
          }
        }
      ]
    });

    await alertc.present();
  }
}
