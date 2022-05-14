import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';
import { NegocioComponent } from './negocio/negocio.component';

const routes: Routes = [
  {
    path: '',
    component: NegocioComponent
  },
  {
    path: 'listado',
    component: ListadoNegociosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoNegocioRoutingModule { }
