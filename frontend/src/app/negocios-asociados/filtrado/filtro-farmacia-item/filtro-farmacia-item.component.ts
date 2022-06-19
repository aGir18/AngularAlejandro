import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Farmacia } from '../../models/farmacia';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { FarmaciaService } from '../../service/farmacia.service';

@Component({
  selector: 'app-filtro-farmacia-item',
  templateUrl: './filtro-farmacia-item.component.html',
  styleUrls: ['./filtro-farmacia-item.component.css']
})
export class FiltroFarmaciaItemComponent implements OnInit {

  @Output() asociacionResultado = new EventEmitter<Asociacion>();
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
      // Antes de iniciar cargo todas las asociaciones
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

      // DELETE
  borrarFarmacia(direccion: string): void {
    if (confirm('¿Quiere borrar esta farmacia?')){
      this.farmaciaService.deleteFarmacia(direccion).subscribe();
    }
  }

  // PATCH
  modificarFarmacia(farmacia: FarmaciaImpl): void {
    this.farmaciaService.update(farmacia.getIdNegocio(farmacia.urlNegocio), farmacia).subscribe();
  }

  // Para pintar en el MODAL
  obtenerAsociacion(){
    // this.asociacionResultado = this.farmaciaService.getAsociacionFarmacia3(this.farmacia.asociacion);
    return this.farmaciaService.getAsociacionFarmacia2(this.farmacia.asociacion);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;
  pen=faPenToSquare;
  cambio=faPenNib;

}
