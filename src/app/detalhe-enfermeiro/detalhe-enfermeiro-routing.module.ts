import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheEnfermeiroPage } from './detalhe-enfermeiro.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheEnfermeiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheEnfermeiroPageRoutingModule {}
