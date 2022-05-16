import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsociacionesNegociosRoutingModule } from './asociaciones-negocios-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { CreacionComponent } from './creacion/creacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CargaComponent } from './carga/carga.component';


@NgModule({
  declarations: [
    ListadoComponent,
    CreacionComponent,
    CargaComponent
  ],
  imports: [
    CommonModule,
    AsociacionesNegociosRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class AsociacionesNegociosModule { }
