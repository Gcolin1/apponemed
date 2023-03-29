import { Router } from '@angular/router';
import { ListaPlanoService } from './lista-plano.service';
import { Plano } from './../Plano';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-planos',
  templateUrl: './lista-planos.page.html',
  styleUrls: ['./lista-planos.page.scss'],
})
export class ListaPlanosPage implements OnInit {

  public planos: Plano[] = []
  nome: string = '';
  public planoBusca: Plano[] = []

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private service : ListaPlanoService, private router : Router) { }

  ngOnInit() {
    this.getAllPlanos()
  }

  redirecionarDetalhe(id : any){
    this.router.navigateByUrl(`detalhe/${id}`);
  }

  getAllPlanos(): void{
    this.service.getPlanos().subscribe((res) => {
      this.planos = res.content
      console.log(this.planos)
    })
  }

  buscarPlanos() {
      this.service.buscarPorNome(this.nome).subscribe(resposta => {
        this.planoBusca = resposta
      })
  }

  LimparTabela(){
    this.planoBusca = []
    this.nome = ''
  }

}
