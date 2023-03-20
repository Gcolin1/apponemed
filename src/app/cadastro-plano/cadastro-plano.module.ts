import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroPlanoService } from './cadastro-plano.service';

import { IonicModule } from '@ionic/angular';

import { CadastroPlanoPageRoutingModule } from './cadastro-plano-routing.module';

import { CadastroPlanoPage } from './cadastro-plano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPlanoPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CadastroPlanoService],
  declarations: [CadastroPlanoPage]
})
export class CadastroPlanoPageModule {}
