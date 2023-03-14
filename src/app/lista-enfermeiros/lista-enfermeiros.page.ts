import { Enfermeiro } from './../Enfermeiro';
import { ListaEnfermeirosService } from './lista-enfermeiros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-enfermeiros',
  templateUrl: './lista-enfermeiros.page.html',
  styleUrls: ['./lista-enfermeiros.page.scss'],
})
export class ListaEnfermeirosPage implements OnInit {

  public enfermeiros: Enfermeiro[] = []
  nome: string = '';
  public enfermeiroBusca: Enfermeiro[] = []

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  constructor(private service : ListaEnfermeirosService) { }


  ngOnInit() {
    this.getAllEnfermeiros()
  }

  getAllEnfermeiros(): void{
    this.service.getEnfermeiros().subscribe((res) => {
      this.enfermeiros = res.content
      console.log(this.enfermeiros)
    })
  }

  buscarEnfermeiro() {
      this.service.buscarPorNome(this.nome).subscribe(resposta => {
        this.enfermeiroBusca = resposta
      })
  }

  LimparTabela(){
    this.enfermeiroBusca = []
    this.nome = ''
  }

}
