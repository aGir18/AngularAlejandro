import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Asociacion } from '../models/asociacion';
import { AsociacionImpl } from '../models/asociacion-impl';
import { AsociacionService } from '../service/asociacion.service';

@Component({
  selector: 'app-listado-asociaciones',
  templateUrl: './listado-asociaciones.component.html',
  styleUrls: ['./listado-asociaciones.component.css']
})
export class ListadoAsociacionesComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
	numPaginas: number = 0;
  asociacionVerDatos!: Asociacion;
  negocios: Negocio[] = [];
  negocioVerDatos!: Negocio;


  constructor(
    private asociacionService: AsociacionService,
	  private auxService: AuxiliarService
  ) { };

  ngOnInit(): void {
    this.asociacionService.getAsociaciones().subscribe((response) => {
      this.asociaciones = this.asociacionService.extraerAsociaciones(response);
  });

    this.getTodasAsociaciones();
  }

  verDatos(asociacion: Asociacion): void {
    this.asociacionVerDatos = asociacion;
  }

  verDatosNegocio(negocio: Negocio): void {
    this.negocioVerDatos = negocio;
  }

  onNegocioEliminar(asociacion: Asociacion): void {
    console.log(`He eliminado a ${asociacion.nombre}`);
    this.asociaciones = this.asociaciones.filter(p => asociacion !== p)
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

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;

}
