import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCapsules, faEraser, faEye, faPencil, faPenNib, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Farmacia } from '../../models/farmacia';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { FarmaciaService } from '../../service/farmacia.service';

@Component({
  selector: 'app-farmacia-listar-item',
  templateUrl: './farmacia-listar-item.component.html',
  styleUrls: ['./farmacia-listar-item.component.css']
})
export class FarmaciaListarItemComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() farmacia: Farmacia = new FarmaciaImpl('','','', 0);
  @Output() farmaciaLeer = new EventEmitter<FarmaciaImpl>();
  @Output() farmaciaEliminar = new EventEmitter<FarmaciaImpl>();
  @Output() farmaciaActualizar = new EventEmitter<FarmaciaImpl>();
  @Output() farmaciaSeleccionada = new EventEmitter<Farmacia>();


  constructor(
    private farmaciaService: FarmaciaService,
    private asociacionService: AsociacionService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
  }


  borrarFarmacia(direccion: string): void{
    if (confirm('¿Quiere borrar esta farmacia?')){
      this.farmaciaService.deleteFarmacia(direccion).subscribe();
    }
  }

  consultar(): void{
    this.farmaciaLeer.emit(this.farmacia);
  }

  editar(): void {
    this.farmaciaActualizar.emit(this.farmacia);
  }


  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;
  pen=faPenToSquare;
  cambio=faPenNib;

}
