import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevaAsociacionRoutingModule } from './nueva-asociacion-routing.module';
import { AsociacionComponent } from './asociacion/asociacion.component';


@NgModule({
  declarations: [
    AsociacionComponent
  ],
  imports: [
    CommonModule,
    NuevaAsociacionRoutingModule
  ]
})
export class NuevaAsociacionModule { }
