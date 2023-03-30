import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarPageRoutingModule } from './agendar-routing.module';

import { AgendarPage } from './agendar.page';
import { AgendarService } from './agendar.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AgendarService],
  declarations: [AgendarPage]
})
export class AgendarPageModule {}
