import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaNegociosComponent } from './carga-negocios/carga-negocios.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { NegociosComponent } from './negocios/negocios.component';
import { OpticasComponent } from './opticas/opticas.component';

const routes: Routes = [
  {
    path: '',
    component: CargaNegociosComponent,
    children: [
      {
        path: 'negocios',
        component: NegociosComponent,
      },
      {
        path: 'formulario-negocios',
        component: NegocioFormComponent,
      },
      {
        path: 'farmacias',
        component: FarmaciasComponent
      },
      {
        path: 'opticas',
        component: OpticasComponent
      },
      {
        path: 'filtrado',
        component: FiltradoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegociosAsociadosRoutingModule { }
