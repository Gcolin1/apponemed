import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMedicosPageRoutingModule } from './lista-medicos-routing.module';

import { ListaMedicosPage } from './lista-medicos.page';
import { HttpClientModule } from '@angular/common/http';
import { ListaMedicoService } from './lista-medico.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMedicosPageRoutingModule,
    HttpClientModule
  ],
  providers: [ListaMedicoService],
  declarations: [ListaMedicosPage]
})
export class ListaMedicosPageModule {}
