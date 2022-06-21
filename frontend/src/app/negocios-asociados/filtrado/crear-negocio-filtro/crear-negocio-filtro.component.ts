import { Component, OnInit } from '@angular/core';
import { faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';
import { FarmaciaService } from '../../service/farmacia.service';
import { NegocioService } from '../../service/negocio.service';
import { OpticaService } from '../../service/optica.service';

@Component({
  selector: 'app-crear-negocio-filtro',
  templateUrl: './crear-negocio-filtro.component.html',
  styleUrls: ['./crear-negocio-filtro.component.css']
})
export class CrearNegocioFiltroComponent implements OnInit {

  negocio: NegocioImpl = new NegocioImpl('', '', '', '', 0, 0, '');
  farmacia: FarmaciaImpl = new FarmaciaImpl('','','',0);
  optica: OpticaImpl = new OpticaImpl('', '', '', 0);
  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;

  // para traer Asociación
  asociacionTraida!: string;


  constructor(
    private negocioService: NegocioService,
    private opticaService: OpticaService,
    private farmaciaService: FarmaciaService,
    private asociacionService: AsociacionService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.asociacionService.getAsociaciones().subscribe((response) => {
      this.asociaciones = this.asociacionService.extraerAsociaciones(response);
  });

  this.getTodasAsociaciones();
  this.traerAsociacion();
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

  crearNegocio(): void {
    console.info('paso por metodo de formulario');
    // this.negocio.asociacion = asociacionPasada;
    this.negocioService.postNegocio(this.negocio).subscribe();
  }

  crearFarmacia(): void {
    console.warn('paso por metodo del POST Farmacia');
    this.farmaciaService.postFarmacia(this.farmacia).subscribe();
  }

  crearOptica(){
    this.opticaService.postOptica(this.optica).subscribe();
  }

  traerAsociacion(): string {
    console.log('Paso por traer asociación');
    console.info('El valor de asociación es => ' + this.asociacionService.getAsociacionPasada());
    this.asociacionTraida = this.asociacionService.getAsociacionPasada();
    console.info('El valor de la asociación es => ' + this.asociacionTraida);
    this.negocio.asociacion = this.asociacionTraida;
    this.farmacia.asociacion = this.asociacionTraida;
    this.optica.asociacion = this.asociacionTraida;

    return this.asociacionService.getAsociacionPasada();
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
