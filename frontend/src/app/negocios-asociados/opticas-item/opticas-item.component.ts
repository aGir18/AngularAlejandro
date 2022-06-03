import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Optica } from '../models/optica';
import { OpticaImpl } from '../models/optica-impl';
import { OpticaService } from '../service/optica.service';

@Component({
  selector: 'app-opticas-item',
  templateUrl: './opticas-item.component.html',
  styleUrls: ['./opticas-item.component.css']
})
export class OpticasItemComponent implements OnInit {

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

  borrarOptica(direccion: string): void {
    this.opticaService.deleteOptica(direccion)
  }

  modificarOptica(optica: OpticaImpl): void {
    this.opticaService.patchOptica(optica).subscribe();
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;

}
