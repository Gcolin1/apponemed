import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroEnfermeirosPage } from './cadastro-enfermeiros.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroEnfermeirosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroEnfermeirosPageRoutingModule {}
