import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';

@Component({
  selector: 'app-negocios-item',
  templateUrl: './negocios-item.component.html',
  styleUrls: ['./negocios-item.component.css']
})
export class NegociosItemComponent implements OnInit {
//AQUÍ ESTÁ el PROBLEMA
//@Input() negocio: Negocio = new NegocioImpl();
  //@Input() negocio: NegocioImpl = new NegocioImpl('','','');
  @Input() negocio: Negocio = new NegocioImpl('', '', '');
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();

  constructor() { }

  ngOnInit(): void {
    console.log('negocio = ', this.negocio);

  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
