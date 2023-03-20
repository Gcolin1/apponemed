import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPlanoPage } from './cadastro-plano.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPlanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPlanoPageRoutingModule {}
