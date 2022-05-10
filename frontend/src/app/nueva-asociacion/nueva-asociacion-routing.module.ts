import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociacionComponent } from './asociacion/asociacion.component';

const routes: Routes = [
  {
    path: '',
    component: AsociacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevaAsociacionRoutingModule { }
