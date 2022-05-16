import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargaComponent } from './carga/carga.component';
import { CreacionComponent } from './creacion/creacion.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: CargaComponent,
    children: [
      {
        path: 'creacion',
        component: CreacionComponent,
      },
      {
        path: 'listado',
        component: ListadoComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociacionesNegociosRoutingModule { }
