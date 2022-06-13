import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroNegociosRoutingModule } from './filtro-negocios-routing.module';
import { ConjuntoNegociosComponent } from './conjunto-negocios/conjunto-negocios.component';
import { FormsModule } from '@angular/forms';
import { NegociosAsociadosModule } from '../negocios-asociados/negocios-asociados.module';


@NgModule({
  declarations: [
    ConjuntoNegociosComponent
  ],
  imports: [
    CommonModule,
    FiltroNegociosRoutingModule,
    FormsModule,
    NegociosAsociadosModule
  ]
})
export class FiltroNegociosModule { }
