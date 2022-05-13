import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoNegocioRoutingModule } from './nuevo-negocio-routing.module';
import { NegocioComponent } from './negocio/negocio.component';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';


@NgModule({
  declarations: [
    NegocioComponent,
    ListadoNegociosComponent
  ],
  imports: [
    CommonModule,
    NuevoNegocioRoutingModule
  ]
})
export class NuevoNegocioModule { }
