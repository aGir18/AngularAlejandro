import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoNegocioRoutingModule } from './nuevo-negocio-routing.module';
import { NegocioComponent } from './negocio/negocio.component';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    NegocioComponent,
    ListadoNegociosComponent
  ],
  imports: [
    CommonModule,
    NuevoNegocioRoutingModule,
    FontAwesomeModule
  ]
})
export class NuevoNegocioModule {
  pencil=faPencil;
}
