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

  constructor(private medicoService : ListaMedicoService, private route : ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.buscarMedicoPorId()
  }

  buscarMedicoPorId(){
    return this.medicoService.buscarMedicoId(this.id).subscribe(res => {
      console.log(res)
      this.medicoDetalhe = [res]
    })
  }
}
