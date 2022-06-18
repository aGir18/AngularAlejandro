import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltradoAsociacionesRoutingModule } from './filtrado-asociaciones-routing.module';
import { FiltroComponent } from './filtro/filtro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsociacionItemComponent } from '../asociaciones/asociacion-item/asociacion-item.component';
import { AsociacionesModule } from '../asociaciones/asociaciones.module';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    FiltroComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FiltradoAsociacionesRoutingModule,
    FontAwesomeModule,
    AsociacionesModule,
    FormsModule
  ]
})
export class FiltradoAsociacionesModule { }
