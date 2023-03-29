import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPlanosPageRoutingModule } from './lista-planos-routing.module';

import { ListaPlanosPage } from './lista-planos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPlanosPageRoutingModule
  ],
  declarations: [ListaPlanosPage]
})
export class ListaPlanosPageModule {}
