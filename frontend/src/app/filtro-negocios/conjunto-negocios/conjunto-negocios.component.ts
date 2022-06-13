import { Component, OnInit } from '@angular/core';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { Farmacia } from 'src/app/negocios-asociados/models/farmacia';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { Optica } from 'src/app/negocios-asociados/models/optica';
import { AuxiliarService } from 'src/app/service/auxiliar.service';

@Component({
  selector: 'app-conjunto-negocios',
  templateUrl: './conjunto-negocios.component.html',
  styleUrls: ['./conjunto-negocios.component.css']
})
export class ConjuntoNegociosComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  idAsociacionSeleccionada!: string;
  negociosAsociados: Negocio[] = [];
  farmaciasAsociadas: Farmacia[] = [];
  opticasAsociadas: Optica[] = [];

  negocioVerDatos!: Negocio;
  farmaciaVerDatos!: Farmacia;
  opticaVerDatos!: Optica;

  constructor(
    private asociacionService: AsociacionService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
    this.asociacionService.getAsociaciones().subscribe((response) => {
      this.asociaciones = this.asociacionService.extraerAsociaciones(response);
  });

    this.getTodasAsociaciones();
  }

  getTodasAsociaciones(): void {
    this.asociacionService.getAsociaciones().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.asociacionService.getAsociacionesPagina(index)
          .subscribe((response) => {
            this.todasAsociaciones.push(...this.asociacionService.extraerAsociaciones(response));
          });
      }
    });
  }

  verDatos(negocio: Negocio): void {
    this.negocioVerDatos = negocio;
  }

  verDatosFarmacia(farmacia: Farmacia): void {
    this.farmaciaVerDatos = farmacia;
  }

  verDatosOptica(optica: Optica): void {
    this.opticaVerDatos = optica;
  }

  setIdAsociacionSeleccionada(id: string){
    this.idAsociacionSeleccionada = id;
    console.log('el valor se ha cambiado a ID=', id);
  }

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
