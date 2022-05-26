import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociacionFormComponent } from './asociacion-form/asociacion-form.component';
import { AsociacionComponent } from './asociacion/asociacion.component';
import { ListadoAsociacionesComponent } from './listado-asociaciones/listado-asociaciones.component';

const routes: Routes = [
  {
    path:'',
    component: ListadoAsociacionesComponent,
  },
  {
    path: ':id',
    component: AsociacionComponent,
  },
  {
    path: 'formulario',
    component: AsociacionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsociacionesRoutingModule { }
