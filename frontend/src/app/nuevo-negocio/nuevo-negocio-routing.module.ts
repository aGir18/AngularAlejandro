import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NegocioComponent } from './negocio/negocio.component';

const routes: Routes = [
  { path: 'negocio', component: NegocioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NuevoNegocioRoutingModule { }
