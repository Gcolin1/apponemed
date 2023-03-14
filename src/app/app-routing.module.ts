import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastro-medicos',
    loadChildren: () => import('./cadastro-medicos/cadastro-medicos.module').then( m => m.CadastroMedicosPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'lista-medicos',
    loadChildren: () => import('./lista-medicos/lista-medicos.module').then( m => m.ListaMedicosPageModule)
  },
  {
    path: 'cadastro-pacientes',
    loadChildren: () => import('./cadastro-pacientes/cadastro-pacientes.module').then( m => m.CadastroPacientesPageModule)
  },
  {
    path: 'cadastro-enfermeiros',
    loadChildren: () => import('./cadastro-enfermeiros/cadastro-enfermeiros.module').then( m => m.CadastroEnfermeirosPageModule)
  },
  {
    path: 'lista-enfermeiros',
    loadChildren: () => import('./lista-enfermeiros/lista-enfermeiros.module').then( m => m.ListaEnfermeirosPageModule)
  },
  {
    path: 'detalhe/:id',
    loadChildren: () => import('./detalhe/detalhe.module').then( m => m.DetalhePageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
