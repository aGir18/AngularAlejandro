import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-negocios',
  templateUrl: './creacion-negocios.component.html',
  styleUrls: ['./creacion-negocios.component.css']
})
export class CreacionNegociosComponent implements OnInit {

  public nuevoNegocio = {tipoNegocio: '', nombreNegocio: '', nifNegocio: '', puntosSigre: 0, autorefractometros:0};

  constructor() { }

  ngOnInit(): void {
  }

}
