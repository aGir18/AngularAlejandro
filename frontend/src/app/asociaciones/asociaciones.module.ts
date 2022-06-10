import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociacionesRoutingModule } from './asociaciones-routing.module';
import { AsociacionComponent } from './asociacion/asociacion.component';
import { ListadoAsociacionesComponent } from './listado-asociaciones/listado-asociaciones.component';
import { AsociacionItemComponent } from './asociacion-item/asociacion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { AsociacionFormComponent } from './asociacion-form/asociacion-form.component';
import { AsociacionModalComponent } from './listado-asociaciones/asociacion-modal/asociacion-modal.component';
import { NegociosListadosComponent } from './negocios-listados/negocios-listados.component';


@NgModule({
  declarations: [
    AsociacionComponent,
    ListadoAsociacionesComponent,
    AsociacionItemComponent,
    AsociacionFormComponent,
    AsociacionModalComponent,
    NegociosListadosComponent
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
