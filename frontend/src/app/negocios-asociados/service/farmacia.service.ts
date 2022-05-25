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

  constructor(private http: HttpClient,
    private auxService: AuxiliarService) { }

  getFarmacias(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint1);
  }

  mapearFarmacia(farmaciaApi: any): FarmaciaImpl {
    return new FarmaciaImpl(farmaciaApi.nombre, farmaciaApi.nif, farmaciaApi.asociacion, farmaciaApi.numeroPuntosSigre);
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

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
