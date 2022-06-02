import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCapsules, faEraser, faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Farmacia } from '../models/farmacia';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { FarmaciaService } from '../service/farmacia.service';

@Component({
  selector: 'app-farmacias-item',
  templateUrl: './farmacias-item.component.html',
  styleUrls: ['./farmacias-item.component.css']
})
export class FarmaciasItemComponent implements OnInit {

  @Input() farmacia: Farmacia = new FarmaciaImpl('', '', '', 0);
  @Output() farmaciaSeleccionada = new EventEmitter<Farmacia>();

  constructor(
    private farmaciaService: FarmaciaService
  ) { }

  ngOnInit(): void {
  }

    //Para hacer DELETE
    borrarFarmacia(direccion: string): void {
      //    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
          this.farmaciaService.deleteFarmacia(direccion);
        }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;

}
