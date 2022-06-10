import { Component, Input, OnInit } from '@angular/core';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { Asociacion } from '../models/asociacion';
import { AsociacionImpl } from '../models/asociacion-impl';
import { AsociacionService } from '../service/asociacion.service';

@Component({
  selector: 'app-negocios-listados',
  templateUrl: './negocios-listados.component.html',
  styleUrls: ['./negocios-listados.component.css']
})
export class NegociosListadosComponent implements OnInit {

  @Input() asociacion!: AsociacionImpl;
  negocios: Negocio[] = [];

  constructor(
    private asociacionService: AsociacionService
  ) { }

  ngOnInit(): void {
    this.listarNegocios();
  }

  listarNegocios(){
    this.asociacionService.getNegociosAsociados(this.asociacion).subscribe(
      (response) =>
    {
      this.negocios = this.asociacionService.obtenerNegociosAsociacion(response);
    });
  }

  listarNegociosSegunda(asociacion: AsociacionImpl){
    return this.asociacionService.getNegociosAsociadosSegunda(this.asociacion);
  }

  listarNegociosTercera(asociacion: string){
    return this.asociacionService.getNegociosAsociadosTercera(this.asociacion.urlAsociacion);
  }

}
