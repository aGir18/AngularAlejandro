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
  //NO ESTÁ DESDE PRODUCCIÓN, PERO EL VALOR ES EL MISMO
  private host: string = environment.host;
  private urlEndPoint1: string = `${this.host}farmacias`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

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

  postFarmacia(farmacia: FarmaciaImpl){
    this.http.post(this.urlEndPoint1, farmacia).subscribe();
  }

  deleteFarmacia(direccionEliminar: string){
    this.http.delete(direccionEliminar).subscribe();
  }

  patchFarmacia(farmacia: FarmaciaImpl) {
    return this.http.patch<any>(`${this.urlEndPoint1}/${farmacia.getIdNegocio(farmacia.urlNegocio)}`, farmacia);
  }

  putFarmacia(farmacia: FarmaciaImpl){
    return this.http.put<any>(`${this.urlEndPoint1}/${farmacia.getIdNegocio(farmacia.urlNegocio)}`, farmacia).subscribe();
  }

  getFarmaciasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint1, pagina);
  }

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
