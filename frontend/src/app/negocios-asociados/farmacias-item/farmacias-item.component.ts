import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCapsules, faEraser, faEye, faPencil, faPenNib, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Farmacia } from '../models/farmacia';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { FarmaciaService } from '../service/farmacia.service';

@Component({
  selector: 'app-farmacias-item',
  templateUrl: './farmacias-item.component.html',
  styleUrls: ['./farmacias-item.component.css']
})
export class FarmaciasItemComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() farmacia: Farmacia = new FarmaciaImpl('', '', '', 0);
  @Output() farmaciaSeleccionada = new EventEmitter<Farmacia>();

  constructor(
    private farmaciaService: FarmaciaService,
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

  borrarFarmacia(direccion: string): void {
    this.farmaciaService.deleteFarmacia(direccion);
  }

  modificarFarmacia(farmacia: FarmaciaImpl): void {
    this.farmaciaService.patchFarmacia(farmacia).subscribe();
  }

  cambiarFarmacia(farmacia: FarmaciaImpl): void {
    this.farmaciaService.putFarmacia(farmacia);
    //.subscribe()
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;
  pen=faPenToSquare;
  cambio=faPenNib;

}
