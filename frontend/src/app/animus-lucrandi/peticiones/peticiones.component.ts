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
  public respuestaApi : any = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getRespuestaApi();
  }

  private getRespuestaApi(){
    this.httpClient.get(this.urlapiNegocios).subscribe(apiResult => (this.respuestaApi = apiResult));
  }

}
