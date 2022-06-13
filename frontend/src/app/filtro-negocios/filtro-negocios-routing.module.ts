import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConjuntoNegociosComponent } from './conjunto-negocios/conjunto-negocios.component';

const routes: Routes = [
  {
    path: '',
    component: ConjuntoNegociosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltroNegociosRoutingModule { }
