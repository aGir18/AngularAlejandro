import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaNegociosComponent } from './carga-negocios/carga-negocios.component';
import { CreacionNegociosComponent } from './creacion-negocios/creacion-negocios.component';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';

const routes: Routes = [
  {
    path: '',
    component: CargaNegociosComponent,
    children: [
      {
        path: 'creacion-negocio',
        component: CreacionNegociosComponent,
      },
      {
        path: 'listado-negocios',
        component: ListadoNegociosComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosAsociadosRoutingModule { }
