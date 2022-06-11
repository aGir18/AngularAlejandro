import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltroComponent } from './filtro/filtro.component';

const routes: Routes = [
  {
    path: 'filtro',
    component: FiltroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltradoAsociacionesRoutingModule { }
