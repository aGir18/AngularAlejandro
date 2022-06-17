import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmacia } from 'src/app/negocios-asociados/models/farmacia';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { Optica } from 'src/app/negocios-asociados/models/optica';
import { FarmaciaService } from 'src/app/negocios-asociados/service/farmacia.service';
import { NegocioService } from 'src/app/negocios-asociados/service/negocio.service';
import { OpticaService } from 'src/app/negocios-asociados/service/optica.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Asociacion } from '../models/asociacion';
import { AsociacionImpl } from '../models/asociacion-impl';

@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

  // private negocioService!: NegocioService;
  // private farmaciaService!: FarmaciaService;
  // private opticaService!: OpticaService;
  private host: string = environment.host;
  private urlEndPoint3: string = `${this.host}asociaciones`;
  private valorPoseeFarmacia!: boolean;
  private valorPoseeOptica!: boolean;
  private urlMetodo: string = `${this.urlEndPoint3}/search/por-tipo-negocios?poseeFarmacia=${this.valorPoseeFarmacia}&poseeOptica=${this.valorPoseeOptica}`;
  private urlMetodo1: string = `${this.urlEndPoint3}/search/por-tipo-negocios?poseeFarmacia=`;
  private urlMetodo2: string = `&poseeOptica=`;


  constructor(
    private http: HttpClient,
    private farmaciaService: FarmaciaService,
    private opticaService: OpticaService,
    private negocioService: NegocioService,
    private auxService: AuxiliarService) {}

  getAsociaciones(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint3);
	}

  mapearAsociacion(asociacionApi: any): AsociacionImpl {
    let asociacionNueva: AsociacionImpl = new AsociacionImpl('', '', []);
    asociacionNueva.nombre = asociacionApi.nombre;
    asociacionNueva.urlAsociacion = asociacionApi._links.self.href;
    asociacionNueva.negocios = asociacionApi._links.negociosAsociacion.href;
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

  patchAsociacion(idAsociacion: string, asociacion: AsociacionImpl): Observable<any>{
    return this.http.patch<any>(`${this.urlEndPoint3}/${idAsociacion}`, asociacion);
  }

  getAsociacionesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint3, pagina);
  }

  // Para el listado de negocios, poner los negocios de UNA asociación

  getNegociosAsociados(asociacionListar: AsociacionImpl): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint3}/${asociacionListar.getIdAsociacion(asociacionListar.urlAsociacion)}/negociosAsociacion`);
  }

    // Para el listado de negocios, poner los negocios de UNA asociación

    getNegociosAsociadosSegunda(asociacionListar: AsociacionImpl){
      return this.http.get(`${this.urlEndPoint3}/${asociacionListar.getIdAsociacion(asociacionListar.urlAsociacion)}/negociosAsociacion`).subscribe();
    }

    // Para el listado de negocios, poner los negocios de UNA asociación

    getNegociosAsociadosTercera(asociacionListar: string){
      return this.http.get(`${asociacionListar}/negociosAsociacion`).subscribe();
    }

    getNegociosAsociadosCuarta(asociacionListar: string): Observable<any>{
      return this.http.get(`${asociacionListar}/negociosAsociacion`);
    }

  // Para el listado de negocios, poner los negocios de UNA asociación

  obtenerNegociosAsociacion(respuestaApi: any): any[] {
    const negocios: any[] = [];
    respuestaApi._embedded.negocios.forEach((p: any) => {
      negocios.push(this.negocioService.mapearNegocio(p));
    });
    console.info('paso a farmacias');
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      negocios.push(this.farmaciaService.mapearFarmacia(p));
    });
    console.info('paso a ópticas');
    respuestaApi._embedded.opticas.forEach((p: any) => {
      negocios.push(this.opticaService.mapearOptica(p));
    });

    return negocios;
  }

// Me falta extraer las asociaciones y dentro de ellas los negocios de cada una de ellas que salgan del GET

  getMetodoPersonalizado(tieneFarmacia: boolean, tieneOptica: boolean): Observable<any>{
    this.valorPoseeFarmacia = tieneFarmacia;
    this.valorPoseeOptica = tieneOptica;
    console.info('paso por el método personalizado - SERVICIO ');
    console.debug('El valor de tieneFarmacia es =>', tieneFarmacia);
    console.debug('El valor de tieneOptica es =>', tieneOptica);

    return this.http.get<any>(`${this.urlMetodo1}${tieneFarmacia}${this.urlMetodo2}${tieneOptica}`);

  }

  extraerAsociacionesMetodo(respuestaApi: any): any[] {
    let asociacionesMetodo: Asociacion[] =[];
    respuestaApi._embedded.asociaciones.forEach((p: any) => {
      asociacionesMetodo.push(this.mapearAsociacion(p));
    });

    return asociacionesMetodo;
  }

  getNegociosAsociacionParticular(idAsociacion: string): Observable<any> {
    console.info('paso por el método getNegociosAsociacionParticular - SERVICIO ');
    console.debug('El valor de idAsociacion es =>', idAsociacion);

    return this.http.get<any>(`${this.urlEndPoint3}/${idAsociacion}/negociosAsociacion`);
  }

  extraerNegociosAsociacionParticular(respuestaApi: any): any[] {
    let negociosParticulares: Negocio[] = [];
    let farmaciasParticulares: Farmacia[] = [];
    let opticasParticulares: Optica[] = [];
    let respuestaNegocios: any[] = [];

    respuestaApi._embedded.farmacias.forEach((p: any) => {
      farmaciasParticulares.push(this.farmaciaService.mapearFarmacia(p));
    });
    respuestaNegocios.push(farmaciasParticulares);

    respuestaApi._embedded.opticas.forEach((p: any) => {
      opticasParticulares.push(this.opticaService.mapearOptica(p));
    });
    respuestaNegocios.push(opticasParticulares);

    respuestaApi._embedded.negocios.forEach((p: any) => {
      negociosParticulares.push(this.negocioService.mapearNegocio(p));
    });
    respuestaNegocios.push(negociosParticulares);


    return respuestaNegocios;
  }

  extraerNegociosAsociacionParticularNegocios(respuestaApi: any): any[] {
    let negociosParticulares: Negocio[] = [];

    respuestaApi._embedded.negocios.forEach((p: any) => {
      negociosParticulares.push(this.negocioService.mapearNegocio(p));
    });

    return negociosParticulares;
  }

  extraerNegociosAsociacionParticularFarmacias(respuestaApi: any): any[] {
    let farmaciasParticulares: Farmacia[] = [];
// poner aquí la condición de si existe como en el resto de HTML que me dijo Prada
    respuestaApi._embedded.farmacias.forEach((p: any) => {
      farmaciasParticulares.push(this.farmaciaService.mapearFarmacia(p));
    });

    return farmaciasParticulares;
  }

  extraerNegociosAsociacionParticularOpticas(respuestaApi: any): any[] {
    let opticasParticulares: Optica[] = [];

    respuestaApi._embedded.opticas.forEach((p: any) => {
      opticasParticulares.push(this.opticaService.mapearOptica(p));
    });

    return opticasParticulares;
  }

}
