import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPacientesPageRoutingModule } from './cadastro-pacientes-routing.module';

import { CadastroPacientesPage } from './cadastro-pacientes.page';
import { CadastroPacienteService } from './cadastro-pacientes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPacientesPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CadastroPacienteService],
  declarations: [CadastroPacientesPage]
})
export class CadastroPacientesPageModule {}
