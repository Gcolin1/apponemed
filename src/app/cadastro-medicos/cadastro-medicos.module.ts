import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroMedicoService } from './cadastro-medico.service';

import { IonicModule } from '@ionic/angular';

import { CadastroMedicosPageRoutingModule } from './cadastro-medicos-routing.module';

import { CadastroMedicosPage } from './cadastro-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroMedicosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CadastroMedicoService],
  declarations: [CadastroMedicosPage]
})
export class CadastroMedicosPageModule {}
