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

  getFarmaciasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint1, pagina);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
