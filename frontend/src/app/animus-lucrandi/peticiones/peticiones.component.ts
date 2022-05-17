import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  public negocios: Negocio[] | undefined;
  private urlapi = 'https://animus-lucrandi.herokuapp.com/api';
  private urlapiNegocios = 'https://animus-lucrandi.herokuapp.com/api/negocios';
  private urlapiAsociaciones = 'https://animus-lucrandi.herokuapp.com/api/asociaciones';
  public getNegocios : any = null;
  public getAsociaciones : any = null;

  public Negocio : {
    tipoNegocio: string;
    nombreNegocio: string;
    nifNegocio: string;
    puntosSigre: number;
    autorefractometros: number;
    asociacion: string;
  } | undefined

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getRespuestaApi();
    this.getAsociacionesMetodo();
  }

  private getRespuestaApi(){
    this.httpClient.get(this.urlapiNegocios).subscribe(apiResult => (this.getNegocios = apiResult));
  }

  private getAsociacionesMetodo(){
    this.httpClient.get(this.urlapiAsociaciones).subscribe(apiResult => (this.getAsociaciones = apiResult));
  }

  /*private postAsociacion(){
    const datos = this.transformData();
  }*/

  /*private mapearNegocios(getNegocios: any){
    const personaje = getNegocios;
    personaje.array.forEach(element => {

    });
  }*/

  private pintarNegocios(){
    this.negocios?.forEach(element => {
      element.nombreNegocio
    });
  }



}
