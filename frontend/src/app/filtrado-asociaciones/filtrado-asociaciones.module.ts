import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltradoAsociacionesRoutingModule } from './filtrado-asociaciones-routing.module';
import { FiltroComponent } from './filtro/filtro.component';


@NgModule({
  declarations: [
    FiltroComponent
  ],
  imports: [
    CommonModule,
    FiltradoAsociacionesRoutingModule
  ]
})
export class FiltradoAsociacionesModule { }
