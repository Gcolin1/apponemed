import { Component, OnInit } from '@angular/core';
import { AgendarService } from '../agendar/agendar.service';
import { Atendimento } from '../Atendimento';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public atendimento: Atendimento[] = []
  nome: string = '';
  public atendimentoBusca: Atendimento[] = []

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private service : AgendarService) {}

  ngOnInit(){
    this.getAllAtendimento()
  }

  getAllAtendimento(): void{
    this.service.getAtendimento().subscribe((res) => {
      this.atendimento = res.content
      console.log(this.atendimento)
    })
  }

  buscarAtendimento() {
    this.service.buscarPorNome(this.nome).subscribe(resposta => {
      this.atendimentoBusca = resposta
    })
  }

  LimparTabela(){
    this.atendimentoBusca = []
    this.nome = ''
  }

}
