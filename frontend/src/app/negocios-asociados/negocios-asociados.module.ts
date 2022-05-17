import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegociosAsociadosRoutingModule } from './negocios-asociados-routing.module';
import { CargaNegociosComponent } from './carga-negocios/carga-negocios.component';
import { CreacionNegociosComponent } from './creacion-negocios/creacion-negocios.component';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CargaNegociosComponent,
    CreacionNegociosComponent,
    ListadoNegociosComponent
  ],
  imports: [
    CommonModule,
    NegociosAsociadosRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NegociosAsociadosModule { }
