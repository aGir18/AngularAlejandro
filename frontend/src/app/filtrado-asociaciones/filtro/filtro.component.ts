import { Component, OnInit } from '@angular/core';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  negocios: Negocio[] = [];
  asociacion!: Asociacion;

  constructor(
    private asociacionService: AsociacionService
  ) { }

  ngOnInit(): void {
    // this.asociacionService.getNegociosAsociadosTercera(this.asociacion.urlAsociacion);
  };

  // getNegocios(){
  //   return this.asociacionService.getNegociosAsociadosTercera(this.asociacion.urlAsociacion);
  // }

}
