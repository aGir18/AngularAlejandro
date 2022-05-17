import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  public negocio = {
    id:'',
    nombre: '',
    nif: '',
    puntosSigre: 0,
    autorefractrometros: 0
  }
  public negocios: Negocio[] | undefined;
  private urlapi = 'https://animus-lucrandi.herokuapp.com/api';
  private urlapiNegocios = 'https://animus-lucrandi.herokuapp.com/api/negocios';
  private urlapiAsociaciones = 'https://animus-lucrandi.herokuapp.com/api/asociaciones';
  public getNegocios : any = null;
  public getAsociaciones : any = null;


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

  private pintarNegocios(){
    this.negocios?.forEach(element => {
      element.nombreNegocio
    });
  }



}
