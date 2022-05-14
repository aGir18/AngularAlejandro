import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listado-negocios',
  templateUrl: './listado-negocios.component.html',
  styleUrls: ['./listado-negocios.component.css']
})
export class ListadoNegociosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;

}
