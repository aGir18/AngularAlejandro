import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NegociosAsociadosRoutingModule } from './negocios-asociados-routing.module';
import { CargaNegociosComponent } from './carga-negocios/carga-negocios.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NegociosComponent } from './negocios/negocios.component';
import { NegociosItemComponent } from './negocios-item/negocios-item.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { NegocioComponent } from './negocios/negocio/negocio.component';
import { NegocioFormComponent } from './negocio-form/negocio-form.component';
import { FarmaciasItemComponent } from './farmacias-item/farmacias-item.component';
import { FarmaciasComponent } from './farmacias/farmacias.component';
import { FarmaciaComponent } from './farmacias/farmacia/farmacia.component';
import { OpticasComponent } from './opticas/opticas.component';
import { OpticaComponent } from './opticas/optica/optica.component';
import { OpticasItemComponent } from './opticas-item/opticas-item.component';
import { FarmaciaModificarComponent } from './farmacias/farmacia-modificar/farmacia-modificar.component';
import { NegocioModificarComponent } from './negocios/negocio-modificar/negocio-modificar.component';
import { PatchOpticaComponent } from './opticas/patch-optica/patch-optica.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { FiltradoItemComponent } from './filtrado/filtrado-item/filtrado-item.component';
import { FiltradoNegocioModalComponent } from './filtrado/filtrado-negocio-modal/filtrado-negocio-modal.component';
import { FiltradoOpticaItemComponent } from './filtrado/filtrado-optica-item/filtrado-optica-item.component';
import { FiltradoOpticaComponent } from './filtrado/filtrado-optica/filtrado-optica.component';
import { FarmaciaListarItemComponent } from './filtrado/farmacia-listar-item/farmacia-listar-item.component';
import { FarmaciaLeerItemComponent } from './filtrado/farmacia-leer-item/farmacia-leer-item.component';
import { FiltroFarmaciaItemComponent } from './filtrado/filtro-farmacia-item/filtro-farmacia-item.component';
import { FarmaciaModalOjoComponent } from './filtrado/farmacia-modal-ojo/farmacia-modal-ojo.component';
import { FarmaciaModalLapizComponent } from './filtrado/farmacia-modal-lapiz/farmacia-modal-lapiz.component';
import { FiltroOpticaItemComponent } from './filtrado/filtro-optica-item/filtro-optica-item.component';
import { OpticaModalOjoComponent } from './filtrado/optica-modal-ojo/optica-modal-ojo.component';
import { OpticaModalLapizComponent } from './filtrado/optica-modal-lapiz/optica-modal-lapiz.component';
import { NegocioModalLapizComponent } from './filtrado/negocio-modal-lapiz/negocio-modal-lapiz.component';
import { FiltroNegocioItemComponent } from './filtrado/filtro-negocio-item/filtro-negocio-item.component';
import { CrearNegocioFiltroComponent } from './filtrado/crear-negocio-filtro/crear-negocio-filtro.component';


@NgModule({
  declarations: [
    CargaNegociosComponent,
    NegociosComponent,
    NegociosItemComponent,
    NegocioComponent,
    NegocioFormComponent,
    FarmaciasItemComponent,
    FarmaciasComponent,
    FarmaciaComponent,
    OpticasComponent,
    OpticaComponent,
    OpticasItemComponent,
    FarmaciaModificarComponent,
    NegocioModificarComponent,
    PatchOpticaComponent,
    FiltradoComponent,
    FiltradoItemComponent,
    FiltradoNegocioModalComponent,
    FiltradoOpticaItemComponent,
    FiltradoOpticaComponent,
    FarmaciaListarItemComponent,
    FarmaciaLeerItemComponent,
    FiltroFarmaciaItemComponent,
    FarmaciaModalOjoComponent,
    FarmaciaModalLapizComponent,
    FiltroOpticaItemComponent,
    OpticaModalOjoComponent,
    OpticaModalLapizComponent,
    NegocioModalLapizComponent,
    FiltroNegocioItemComponent,
    CrearNegocioFiltroComponent
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
  ],
  exports:[
    NegociosItemComponent,
    FarmaciasItemComponent,
    FarmaciasComponent,
    FarmaciaComponent,
    FarmaciaModificarComponent,
    OpticasItemComponent,
    OpticasComponent,
    OpticaComponent,
    PatchOpticaComponent,
    NegocioComponent
  ]
})
export class NegociosAsociadosModule { }
