import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociacionComponent } from './asociacion/asociacion.component';
import { ListadoAsociacionesComponent } from './listado-asociaciones/listado-asociaciones.component';

const routes: Routes = [
  {
    path: '',
    component: AsociacionComponent
  },
  {
    path: 'listado',
    component: ListadoAsociacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaAsociacionRoutingModule { }
