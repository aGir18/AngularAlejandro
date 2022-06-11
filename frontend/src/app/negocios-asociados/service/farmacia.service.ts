import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Farmacia } from '../models/farmacia';
import { FarmaciaImpl } from '../models/farmacia-impl';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  private host: string = environment.host;
  private urlEndPoint1: string = `${this.host}farmacias`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService
    ) { }

// GET
  getFarmacias(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint1);
  }

  mapearFarmacia(farmaciaApi: any): FarmaciaImpl {
    let farmaciaNueva : FarmaciaImpl = new FarmaciaImpl('','','', 0);
    farmaciaNueva.nombre = farmaciaApi.nombre;
    farmaciaNueva.nif = farmaciaApi.nif;
    farmaciaNueva.asociacion = farmaciaApi._links.asociacion.href;
    farmaciaNueva.numeroPuntosSigre = farmaciaApi.numeroPuntosSigre;
    farmaciaNueva.urlNegocio = farmaciaApi._links.self.href;

    return farmaciaNueva;
  }

  extraerFarmacias(respuestaApi: any): Farmacia[] {
    const farmacias: Farmacia[] = [];
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      farmacias.push(this.mapearFarmacia(p));
    });

    return farmacias;
  }

// POST
  postFarmacia(farmacia: FarmaciaImpl): Observable<any>{
    return this.http.post(this.urlEndPoint1, farmacia);
  }

// DELETE
  deleteFarmacia(direccionEliminar: string): Observable<any>{
    return this.http.delete(direccionEliminar);
  }

// PATCH
  update(idFarmacia: string, farmacia: FarmaciaImpl): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPoint1}/${idFarmacia}`, farmacia);
    }

  getFarmaciasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint1, pagina);
  }

  // Esto para botones dentro del primer modal

  // Para cargar en modal
  getAsociacionFarmacia2(direccionConsulta: string){
    this.http.get(direccionConsulta).subscribe();
  }

  // Para cargar en modal
  getAsociacionFarmacia3(direccionConsulta: string): Observable<any>{
    return this.http.get(direccionConsulta);
  }

  // Para cargar en modal
  getAsociacionFarmacia(): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint1}/${this.getId}/asociacion`);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
