import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}negocios`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

  getNegocios(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }
/*
  extraerNegocios(respuestaApi: any): Negocio[] {
    const negocios: Negocio[] = [];
    respuestaApi.results.forEach((p: any) => {
      negocios.push(this.mapearPersonaje(p));
    });
    return negocios;
  }*/

  /*mapearPersonaje(personajeApi: any): Negocio {
    return new Negocio(
      personajeApi.name,
      personajeApi.height,
      personajeApi.mass,
      personajeApi.hair_color,
      personajeApi.skin_color,
      personajeApi.eye_color,
      personajeApi.birth_year,
      personajeApi.gender,
      personajeApi.homeworld,
      personajeApi.films);
  }*/

  create(negocio: Negocio): void {
    console.log(`Se ha creado el personaje: ${JSON.stringify(negocio)}`);
  }

  getPersonajesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }
}
