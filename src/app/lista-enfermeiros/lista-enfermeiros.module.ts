import { HttpClientModule } from '@angular/common/http';
import { ListaEnfermeirosService } from './lista-enfermeiros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEnfermeirosPageRoutingModule } from './lista-enfermeiros-routing.module';

import { ListaEnfermeirosPage } from './lista-enfermeiros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEnfermeirosPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ListaEnfermeirosService],
  declarations: [ListaEnfermeirosPage]
})
export class ListaEnfermeirosPageModule {}
