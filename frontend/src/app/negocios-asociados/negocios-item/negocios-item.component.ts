import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
  @Input() negocio: Negocio = new NegocioImpl('', '', '', '');
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
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

}
