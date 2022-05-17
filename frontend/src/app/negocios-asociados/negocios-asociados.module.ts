import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegociosAsociadosRoutingModule } from './negocios-asociados-routing.module';
import { CargaNegociosComponent } from './carga-negocios/carga-negocios.component';
import { CreacionNegociosComponent } from './creacion-negocios/creacion-negocios.component';
import { ListadoNegociosComponent } from './listado-negocios/listado-negocios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NegociosComponent } from './negocios/negocios.component';
import { NegociosItemComponent } from './negocios-item/negocios-item.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { NegocioComponent } from './negocios/negocio/negocio.component';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';


@NgModule({
  declarations: [
    CargaNegociosComponent,
    CreacionNegociosComponent,
    ListadoNegociosComponent,
    NegociosComponent,
    NegociosItemComponent,
    NegocioComponent,
    NegocioFormComponent
  ],
  imports: [
    CommonModule,
    NegociosAsociadosRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuxiliarService
  ]
})
export class NegociosAsociadosModule { }
