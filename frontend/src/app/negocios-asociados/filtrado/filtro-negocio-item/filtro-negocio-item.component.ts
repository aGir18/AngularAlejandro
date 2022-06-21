import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faTrash, faX, faFilePen, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Farmacia } from '../../models/farmacia';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { Negocio } from '../../models/negocio';
import { NegocioImpl } from '../../models/negocio-impl';
import { NegocioService } from '../../service/negocio.service';

@Component({
  selector: 'app-filtro-negocio-item',
  templateUrl: './filtro-negocio-item.component.html',
  styleUrls: ['./filtro-negocio-item.component.css']
})
export class FiltroNegocioItemComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() negocio: Negocio = new NegocioImpl('', '', '', '', 0, 0, '');
  @Input() farmacia: Farmacia = new FarmaciaImpl('','','',0);
  @Input() negocioNuevo: Negocio = new NegocioImpl('', '', '', '', 0, 0, '');
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
  @Output() farmaciaSeleccionada = new EventEmitter<Farmacia>();

  //negocioItem : Negocio = new NegocioImpl('', '', '', '');

  constructor(
    private negocioService: NegocioService,
    private asociacionService: AsociacionService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
    // console.log('negocio = ', this.negocio);
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

  borrarNegocio(direccion: string): void {
    if (confirm('¿Quiere borrar este negocio?')){
      this.negocioService.deleteNegocio(direccion).subscribe();
    }
    this.ngOnInit();
  }

  actualizarNegocio(negocio: NegocioImpl): void {
    this.negocioService.update(negocio.getIdNegocio(negocio.urlNegocio), negocio).subscribe();
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  trash2=faTrash;
  x=faX;
  modificar=faFilePen;
  cambio=faPenNib;

}
