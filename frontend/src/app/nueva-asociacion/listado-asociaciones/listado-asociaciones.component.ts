import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listado-asociaciones',
  templateUrl: './listado-asociaciones.component.html',
  styleUrls: ['./listado-asociaciones.component.css']
})
export class ListadoAsociacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;

}
