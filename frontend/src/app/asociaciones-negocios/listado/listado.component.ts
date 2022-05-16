import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;

}
