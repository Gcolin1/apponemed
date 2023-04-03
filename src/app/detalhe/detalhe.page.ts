import { AlertController, IonModal, NavController } from '@ionic/angular';
import { DetalheService } from './detalhe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaMedicoService } from './../lista-medicos/lista-medico.service';
import { Medico } from './../Medico';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  public medicoDetalhe : Medico[] = []
  id : any
  atualizar: FormGroup;

  constructor(private medicoService : ListaMedicoService, private route : ActivatedRoute, private detalheService : DetalheService, private alert : AlertController, private router : Router, private navCtrl: NavController) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.atualizar = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      crm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
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

  ngOnInit() {
    this.buscarMedicoPorId()
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
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
              this.navCtrl.navigateForward('/lista-medicos');
            })
          }
        }
      ]
    });

    await alertc.present();
  }

  async onSubmit(atualizar : FormGroup) {
    const alertA = await this.alert.create({
      header: 'Confirmação',
      message: 'Você tem certeza que deseja continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.AlertCancel
            this.setOpen(false) 
            window.location.reload()
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            if(this.atualizar.valid){
              this.detalheService.editar(this.atualizar.value, this.id).subscribe(resposta => {
                console.log(resposta)
              })
                atualizar.reset()
                this.AlertEditar()
                this.navCtrl.navigateForward('/lista-medicos');
                window.location.reload()
                this.setOpen(false)
            }else{
              this.AlertErrorEditar()
            }
          }
        }
      ]
    });

    await alertA.present();
  }

  async AlertEditar() {
    const alert = await this.alert.create({
      header: 'Atualização efetuada',
      message: 'Seu cadastro foi realizado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertErrorEditar() {
    const alert = await this.alert.create({
      header: 'invalido',
      message: 'Dados invalidos',
      buttons: ['OK']
    });

    await alert.present();
  }

}

