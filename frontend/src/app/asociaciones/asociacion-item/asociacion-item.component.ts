import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faList } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { Asociacion } from '../models/asociacion';

@Component({
  selector: 'app-asociacion-item',
  templateUrl: './asociacion-item.component.html',
  styleUrls: ['./asociacion-item.component.css']
})
export class AsociacionItemComponent implements OnInit {

  @Input() asociacion!: Asociacion;
  @Output() asociacionSeleccionada = new EventEmitter<Asociacion>();
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
  //@Output() asociacionSeleccionada = new EventEmitter<Asociacion>();

  constructor() { }

  ngOnInit(): void {
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  lista=faList;

}
