import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { FarmaciaService } from 'src/app/negocios-asociados/service/farmacia.service';
import { NegocioService } from 'src/app/negocios-asociados/service/negocio.service';
import { OpticaService } from 'src/app/negocios-asociados/service/optica.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Asociacion } from '../models/asociacion';
import { AsociacionImpl } from '../models/asociacion-impl';

@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

  private negocioService!: NegocioService;
  private farmaciaService!: FarmaciaService;
  private opticaService!: OpticaService;
  private host: string = environment.host;
  private urlEndPoint3: string = `${this.host}asociaciones`;
  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

/*   getAsociacion(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint3}${id}`);
  } */

  getAsociaciones(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint3);
	}

  mapearAsociacion(asociacionApi: any): AsociacionImpl {
    let asociacionNueva: AsociacionImpl = new AsociacionImpl('', '', []);
    asociacionNueva.nombre = asociacionApi.nombre;
    asociacionNueva.urlAsociacion = asociacionApi._links.self.href;
    asociacionNueva.negocios = asociacionApi._links.negociosAsociacion.href;
    return asociacionNueva;
  }

  extraerAsociaciones(respuestaApi: any): Asociacion[] {
    const asociaciones: Asociacion[] = [];
    respuestaApi._embedded.asociaciones.forEach((p: any) => {
      asociaciones.push(this.mapearAsociacion(p));
    });
    return asociaciones;
  }

  create(asociacion: Asociacion): void {
    console.log(`Se ha creado el personaje: ${JSON.stringify(asociacion)}`);
  }

  postAsociacion(asociacion: AsociacionImpl){
    this.http.post(this.urlEndPoint3, asociacion).subscribe();
  }

  getAsociacionesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint3, pagina);
  }

  // Para el listado de negocios, poner los negocios de UNA asociación

  getNegociosAsociados(urlAsociacion: Asociacion): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint3}/${urlAsociacion.urlAsociacion}/negociosAsociacion`);
  }

  // Para el listado de negocios, poner los negocios de UNA asociación

  obtenerNegociosAsociacion(respuestaApi: any): any[] {
    const negocios: any[] = [];
    respuestaApi._embedded.negocios.forEach((p: any) => {
      negocios.push(this.negocioService.mapearNegocio(p));
    });
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      negocios.push(this.farmaciaService.mapearFarmacia(p));
    });
    respuestaApi._embedded.opticas.forEach((p: any) => {
      negocios.push(this.opticaService.mapearOptica(p));
    });

    return negocios;
  }
}
