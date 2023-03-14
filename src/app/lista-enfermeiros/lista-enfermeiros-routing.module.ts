import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEnfermeirosPage } from './lista-enfermeiros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEnfermeirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEnfermeirosPageRoutingModule {}
