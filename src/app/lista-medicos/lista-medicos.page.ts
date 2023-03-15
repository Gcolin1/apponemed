import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Medico } from '../Medico';
import { ListaMedicoService } from './lista-medico.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.page.html',
  styleUrls: ['./lista-medicos.page.scss'],
})
export class ListaMedicosPage implements OnInit {

  public medicos: Medico[] = []
  nome: string = '';
  public medicoBusca: Medico[] = []

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private service : ListaMedicoService, private router : Router) {}

  ngOnInit(){
    this.getAllMedicos()

  }

  redirecionarDetalhe(id : any){
    this.router.navigateByUrl(`detalhe/${id}`);
  }

  getAllMedicos(): void{
    this.service.getMedicos().subscribe((res) => {
      this.medicos = res.content
      console.log(this.medicos)
    })
  }

  buscarMedico() {
      this.service.buscarPorNome(this.nome).subscribe(resposta => {
        this.medicoBusca = resposta
      })
  }

  LimparTabela(){
    this.medicoBusca = []
    this.nome = ''
  }

}
