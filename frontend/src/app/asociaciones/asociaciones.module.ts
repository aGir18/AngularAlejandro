import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociacionesRoutingModule } from './asociaciones-routing.module';
import { AsociacionComponent } from './asociacion/asociacion.component';
import { ListadoAsociacionesComponent } from './listado-asociaciones/listado-asociaciones.component';
import { AsociacionItemComponent } from './asociacion-item/asociacion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [
    AsociacionComponent,
    ListadoAsociacionesComponent,
    AsociacionItemComponent
  ],
  imports: [
    CommonModule,
    AsociacionesRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class AsociacionesModule { }
