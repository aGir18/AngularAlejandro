import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Asociacion } from '../models/asociacion';
import { AsociacionImpl } from '../models/asociacion-impl';

@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

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
    let asociacionNueva: AsociacionImpl = new AsociacionImpl('', '');
    asociacionNueva.nombre = asociacionApi.nombre;
    asociacionNueva.urlAsociacion = asociacionApi._links.self.href;
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
}
