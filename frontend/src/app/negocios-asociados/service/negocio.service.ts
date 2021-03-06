import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { FarmaciaImpl } from '../models/farmacia-impl';
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

  extraerFarmacias(respuestaApi: any): Negocio[] {
    const negocios: Negocio[] = [];
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    return negocios;
  }

  extraerOpticas(respuestaApi: any): Negocio[] {
    const negocios: Negocio[] = [];
    respuestaApi._embedded.opticas.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });
    return negocios;
  }

  extraerNegocios(respuestaApi: any): Negocio[] {
    const negocios: Negocio[] = [];
    respuestaApi._embedded.negocios.forEach((p: any) => {
      negocios.push(this.mapearNegocio(p));
    });

    return negocios;
  }

  mapearNegocio(negocioApi: any): NegocioImpl {
    let negocioNuevo : NegocioImpl = new NegocioImpl('','','','', 0, 0, '');
    negocioNuevo.nombre = negocioApi.nombre;
    negocioNuevo.nif = negocioApi.nif;
    negocioNuevo.asociacion = negocioApi._links.asociacion.href;
    negocioNuevo.tipoNegocio = negocioApi.tipoNegocio;
    negocioNuevo.urlNegocio = negocioApi._links.self.href;

    return negocioNuevo;
  }

  postNegocio(negocio: NegocioImpl): Observable<any>{
    return this.http.post(this.urlEndPoint, negocio);
  }

  deleteNegocio(direccionEliminar: string): Observable<any>{
    return this.http.delete(direccionEliminar);
  }

  update(idNegocio: string, negocio: NegocioImpl): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPoint}/${idNegocio}`, negocio);
    }

  patchNegocio(direccionEliminar: string) {
    this.http.patch(this.urlEndPoint, direccionEliminar).subscribe();
  }

  patchNegocio3(negocio: NegocioImpl) {
    return this.http.patch<any>(`${this.urlEndPoint}/${negocio.getIdNegocio(negocio.urlNegocio)}`, negocio);
  }

  putNegocio(negocio: NegocioImpl) {
    return this.http.put<any>(`${this.urlEndPoint}/${negocio.getIdNegocio(negocio.urlNegocio)}`, negocio);
  }

  getNegociosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;

  }

/*   getId(): string {
    let posicionFinal: number = this.NegocioImplEjemplo.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;

  } */


}
