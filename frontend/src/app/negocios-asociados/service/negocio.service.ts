import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}negocios`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

  getNegocios(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }
//Crear un extraerFarmacias y uno opticas
  extraerNegocios(respuestaApi: any): Negocio[] {
    const negocios: Negocio[] = [];
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    respuestaApi._embedded.opticas.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    return negocios;
  }

  mapearNegocio(negocioApi: any): NegocioImpl {
    let negocio = new NegocioImpl();
    //negocio.tipoNegocio = negocioApi.tipo_negocio;
    negocio.nombreNegocio = negocioApi.nombre;
    negocio.nifNegocio = negocioApi.nif;
    negocio.puntosSigre = negocioApi.numeroPuntosSigre;
    negocio.autorefractometros = negocioApi.numeroAutorefractometros;
    //guardar href
    negocio.asociacion = negocioApi.asociacion;
    return negocio;
  }

  create(negocio: Negocio): void {
    console.log(`Se ha creado el negocio: ${JSON.stringify(negocio)}`);
  }

  getNegociosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
