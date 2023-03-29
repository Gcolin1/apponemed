import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPlanosPage } from './lista-planos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPlanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPlanosPageRoutingModule {}
