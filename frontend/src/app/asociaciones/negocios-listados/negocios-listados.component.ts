import { Component, Input, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/negocios-asociados/models/farmacia';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { Optica } from 'src/app/negocios-asociados/models/optica';
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
  negocioVerDatos!: Negocio;
  farmaciaVerDatos!: Farmacia;
  opticaVerDatos!: Optica;
  negociosAsociados: Negocio[] = [];
  farmaciasAsociadas: Farmacia[] = [];
  opticasAsociadas: Optica[] = [];

  constructor(
    private asociacionService: AsociacionService
  ) { }

  // quitar listarNegocios de aquí y asociarlo a pinchar al botón del ojo
  ngOnInit(): void {
    // this.listarNegocios();
  }

  listarNegocios(){
    this.asociacionService.getNegociosAsociados(this.asociacion).subscribe(
      (response) =>
    {
      this.negocios = this.asociacionService.obtenerNegociosAsociacion(response);
    });
  }

  verDatos(negocio: Negocio): void {
    this.negocioVerDatos = negocio;
  }

  verDatosFarmacia(farmacia: Farmacia): void {
    this.farmaciaVerDatos = farmacia;
  }

  listarNegociosSegunda(){
    return this.asociacionService.getNegociosAsociadosSegunda(this.asociacion);
  }

  listarNegociosTercera(asociacion: string){
    return this.asociacionService.getNegociosAsociadosTercera(this.asociacion.urlAsociacion);
  }

// Lo pillo para poner bien en el modal los nombres de los negocios

  hacerLlamada(idPasado: string){
    this.asociacionService.getNegociosAsociacionParticular(idPasado).subscribe((response) => {
      this.negociosAsociados = this.asociacionService.extraerNegociosAsociacionParticularNegocios(response);
    });
    console.info('paso por el GET negociosAsociacion - COMPONENTE');
    console.info('El valor del idPasado es ', idPasado);
  }

  hacerLlamadaFarmacia(idPasado: string){
    this.asociacionService.getNegociosAsociacionParticular(idPasado).subscribe((response) => {
      this.farmaciasAsociadas = this.asociacionService.extraerNegociosAsociacionParticularFarmacias(response);
    });
    console.info('paso por el GET negociosAsociacion - COMPONENTE');
    console.info('El valor del idPasado es ', idPasado);
  }

  hacerLlamadaOptica(idPasado: string){
    this.asociacionService.getNegociosAsociacionParticular(idPasado).subscribe((response) => {
      this.opticasAsociadas = this.asociacionService.extraerNegociosAsociacionParticularOpticas(response);
    });
    console.info('paso por el GET negociosAsociacion - COMPONENTE');
    console.info('El valor del idPasado es ', idPasado);
  }

}
