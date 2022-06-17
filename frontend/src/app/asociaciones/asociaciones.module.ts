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
import { NegociosItemComponent } from '../negocios-asociados/negocios-item/negocios-item.component';
import { NegociosAsociadosModule } from '../negocios-asociados/negocios-asociados.module';
import { AsociacionModificarComponent } from './asociacion-modificar/asociacion-modificar.component';


@NgModule({
  declarations: [
    AsociacionComponent,
    ListadoAsociacionesComponent,
    AsociacionItemComponent,
    AsociacionFormComponent,
    AsociacionModalComponent,
    NegociosListadosComponent,
    AsociacionModificarComponent
  ],
  imports: [
    CommonModule,
    AsociacionesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NegociosAsociadosModule
  ],
  providers: [AuxiliarService],
  exports:[
    AsociacionItemComponent
  ]
})
export class AsociacionesModule { }
