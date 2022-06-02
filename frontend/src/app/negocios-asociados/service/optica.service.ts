import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Optica } from '../models/optica';
import { OpticaImpl } from '../models/optica-impl';

@Injectable({
  providedIn: 'root'
})
export class OpticaService {
  private host: string = environment.host;
  private urlEndPoint2: string = `${this.host}opticas`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

  getOpticas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint2);
  }

  mapearOptica(opticaApi: any): OpticaImpl {
    let opticaNueva: OpticaImpl = new OpticaImpl('','','', 0);
    opticaNueva.nombre = opticaApi.nombre;
    opticaNueva.nif = opticaApi.nif;
    opticaNueva.asociacion = opticaApi._links.asociacion.href;
    opticaNueva.numeroAutorefractometros = opticaApi.numeroAutorefractometros;
    opticaNueva.urlNegocio = opticaApi._links.self.href;

    return opticaNueva;
  }

  extraerOpticas(respuestaApi: any): Optica[] {
    const opticas: Optica[] = [];
    respuestaApi._embedded.opticas.forEach((p: any) => {
      opticas.push(this.mapearOptica(p));
    });
    return opticas;
  }

  postOptica(optica: OpticaImpl){
    this.http.post(this.urlEndPoint2, optica).subscribe();
  }

  deleteOptica(direccionEliminar: string){
    this.http.delete(direccionEliminar).subscribe();
  }

  getOpticasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint2, pagina);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}


