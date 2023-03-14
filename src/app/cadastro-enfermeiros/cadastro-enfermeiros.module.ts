import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroEnfermeirosPageRoutingModule } from './cadastro-enfermeiros-routing.module';

import { CadastroEnfermeirosPage } from './cadastro-enfermeiros.page';
import { CadastroEnfermeirosService } from './cadastro-enfermeiros.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroEnfermeirosPageRoutingModule,
    HttpClientModule
  ],
  providers: [CadastroEnfermeirosService],
  declarations: [CadastroEnfermeirosPage]
})
export class CadastroEnfermeirosPageModule {}
