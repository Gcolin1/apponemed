import { HttpClientModule } from '@angular/common/http';
import { DetalheService } from './detalhe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePageRoutingModule } from './detalhe-routing.module';

import { DetalhePage } from './detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetalhePageRoutingModule,
    HttpClientModule
  ],
  providers: [DetalheService],
  declarations: [DetalhePage]
})
export class DetalhePageModule {}
