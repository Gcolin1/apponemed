import { HttpClientModule } from '@angular/common/http';
import { DetalheEnfermeiroService } from './detalhe-enfermeiro.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheEnfermeiroPageRoutingModule } from './detalhe-enfermeiro-routing.module';

import { DetalheEnfermeiroPage } from './detalhe-enfermeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    DetalheEnfermeiroPageRoutingModule
  ],
  providers: [DetalheEnfermeiroService],
  declarations: [DetalheEnfermeiroPage]
})
export class DetalheEnfermeiroPageModule {}
