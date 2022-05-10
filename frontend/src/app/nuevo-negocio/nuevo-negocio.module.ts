import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoNegocioRoutingModule } from './nuevo-negocio-routing.module';
import { NegocioComponent } from './negocio/negocio.component';


@NgModule({
  declarations: [
    NegocioComponent
  ],
  imports: [
    CommonModule,
    NuevoNegocioRoutingModule
  ]
})
export class NuevoNegocioModule { }
