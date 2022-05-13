import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaAsociacionRoutingModule } from './nueva-asociacion-routing.module';
import { AsociacionComponent } from './asociacion/asociacion.component';
import { ListadoAsociacionesComponent } from './listado-asociaciones/listado-asociaciones.component';


@NgModule({
  declarations: [
    AsociacionComponent,
    ListadoAsociacionesComponent
  ],
  imports: [
    CommonModule,
    NuevaAsociacionRoutingModule
  ]
})
export class NuevaAsociacionModule { }
