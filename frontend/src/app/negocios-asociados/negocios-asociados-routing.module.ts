import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaNegociosComponent } from './carga-negocios/carga-negocios.component';
import { CreacionNegociosComponent } from './creacion-negocios/creacion-negocios.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { NegocioModificarComponent } from './negocio-modificar/negocio-modificar.component';
import { NegociosComponent } from './negocios/negocios.component';

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
      },
      {
        path: 'negocios',
        component: NegociosComponent,
      },
      {
        path: 'formulario-negocios',
        component: NegocioFormComponent,
      },
      {
        path: 'modificar',
        component: NegocioModificarComponent
      },
      {
        path: 'farmacias',
        component: FarmaciasComponent
      }
      /*{
        path:
      }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosAsociadosRoutingModule { }
