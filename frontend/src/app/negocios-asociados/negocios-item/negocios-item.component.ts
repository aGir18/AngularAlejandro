import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { Farmacia } from '../models/farmacia';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';
import { NegocioService } from '../service/negocio.service';

@Component({
  selector: 'app-negocios-item',
  templateUrl: './negocios-item.component.html',
  styleUrls: ['./negocios-item.component.css']
})
export class NegociosItemComponent implements OnInit {
//AQUÍ ESTÁ el PROBLEMA
//@Input() negocio: Negocio = new NegocioImpl();
  //@Input() negocio: NegocioImpl = new NegocioImpl('','','');
  //Este es el que se ha usado para el DELETE
//  @Input() negocio: Negocio = new NegocioImpl('', '', '', '');

  @Input() negocio: Negocio = new NegocioImpl('', '', '', '', 0, 0);
  @Input() farmacia: Farmacia = new FarmaciaImpl('','','',0);
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
  @Output() farmaciaSeleccionada = new EventEmitter<Farmacia>();

  //negocioItem : Negocio = new NegocioImpl('', '', '', '');

  constructor(
    private negocioService: NegocioService
  ) { }

  ngOnInit(): void {
    console.log('negocio = ', this.negocio);

  }

  //Para hacer DELETE
  borrarNegocio(direccion: string): void {
//    this.negocioService.deleteNegocio(this.negocioItem.urlNegocio);
    this.negocioService.deleteNegocio(direccion);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  trash2=faTrash;
  x=faX;

}
