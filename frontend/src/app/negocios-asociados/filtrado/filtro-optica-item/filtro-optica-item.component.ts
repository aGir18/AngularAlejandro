import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Optica } from '../../models/optica';
import { OpticaImpl } from '../../models/optica-impl';
import { OpticaService } from '../../service/optica.service';

@Component({
  selector: 'app-filtro-optica-item',
  templateUrl: './filtro-optica-item.component.html',
  styleUrls: ['./filtro-optica-item.component.css']
})
export class FiltroOpticaItemComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() optica: Optica = new OpticaImpl('', '', '', 0);
  @Output() opticaSeleccionada = new EventEmitter<Optica>();

  constructor(
    private opticaService: OpticaService,
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

  borrarOptica(direccion: string) {
    if (confirm('¿Quiere borrar esta óptica?')){
      this.opticaService.deleteOptica(direccion).subscribe();
    }
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;
  pen=faPenToSquare;
  cambio=faPenNib;
  patch=faPenToSquare;
}
