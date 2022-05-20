import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
  private urlEndPoint1: string = `${this.host}farmacias`;
  private urlEndPoint2: string = `${this.host}opticas`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

  getNegocios(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  getFarmacias(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint1);
  }

  getOpticas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint2);
  }
//Crear un extraerFarmacias y uno opticas
/*
  extraerNegocios(respuestaApi: any): Negocio[] {
    const negocios: Negocio[] = [];
*/
/*
    CAMBIOS GUIJARRO
    extraerNegocios(respuestaApi: any): NegocioImpl[]
*/
  extraerFarmacias(respuestaApi: any): Negocio[] {
    //let negocio = new NegocioImpl();
    /*const negocios: NegocioImpl[] = [];*/
    const negocios: Negocio[] = [];
    // respuestaApi._embedded.negocios.forEach((p:any) => {
    //   negocios.push(this.mapearNegocio(p));
    // });
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    return negocios;
  }

  extraerOpticas(respuestaApi: any): Negocio[] {
    //let negocio = new NegocioImpl();
    /*const negocios: NegocioImpl[] = [];*/
    const negocios: Negocio[] = [];
    // respuestaApi._embedded.negocios.forEach((p:any) => {
    //   negocios.push(this.mapearNegocio(p));
    // });
    respuestaApi._embedded.opticas.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    return negocios;
  }

  extraerNegocios(respuestaApi: any): Negocio[] {
    //let negocio = new NegocioImpl();
    /*const negocios: NegocioImpl[] = [];*/
    const negocios: Negocio[] = [];
    // respuestaApi._embedded.negocios.forEach((p:any) => {
    //   negocios.push(this.mapearNegocio(p));
    // });
    respuestaApi._embedded.negocios.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    respuestaApi._embedded.opticas.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    return negocios;
  }

  mapearNegocio(negocioApi: any): NegocioImpl {
    //let negocio: NegocioImpl = new NegocioImpl();
    let negocio = new NegocioImpl();
    //negocio.tipoNegocio = negocioApi.tipo_negocio;
    //negocio.id = this.getId(negocioApi._links.href);
    negocio.nombre = negocioApi.nombre;
    negocio.nif = negocioApi.nif;
    negocio.puntosSigre = negocioApi.numeroPuntosSigre;
    negocio.autorefractometros = negocioApi.numeroAutorefractometros;
    //guardar href
    negocio.asociacion = negocioApi.asociacion;
    return negocio;
  }
/*
  create(negocio: Negocio): void {
    console.log(`Se ha creado el negocio: ${JSON.stringify(negocio)}`);
  }*/
  create(negocio: Negocio): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, negocio);
  }

  getNegociosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;

  }

}
