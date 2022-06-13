import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroNegociosRoutingModule } from './filtro-negocios-routing.module';
import { ConjuntoNegociosComponent } from './conjunto-negocios/conjunto-negocios.component';
import { FormsModule } from '@angular/forms';
import { NegociosAsociadosModule } from '../negocios-asociados/negocios-asociados.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ConjuntoNegociosComponent
  ],
  imports: [
    CommonModule,
    FiltroNegociosRoutingModule,
    FormsModule,
    NegociosAsociadosModule,
    FontAwesomeModule
  ]
})
export class FiltroNegociosModule { }
