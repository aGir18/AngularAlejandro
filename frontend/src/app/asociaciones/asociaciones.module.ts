import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociacionesRoutingModule } from './asociaciones-routing.module';
import { AsociacionComponent } from './asociacion/asociacion.component';


@NgModule({
  declarations: [
    AsociacionComponent
  ],
  imports: [
    CommonModule,
    AsociacionesRoutingModule
  ]
})
export class AsociacionesModule { }
