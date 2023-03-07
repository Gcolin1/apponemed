import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroMedicosPage } from './cadastro-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroMedicosPageRoutingModule {}
