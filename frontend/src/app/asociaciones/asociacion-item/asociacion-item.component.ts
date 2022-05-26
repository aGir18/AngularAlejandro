import { Component, Input, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from '../models/asociacion';

@Component({
  selector: 'app-asociacion-item',
  templateUrl: './asociacion-item.component.html',
  styleUrls: ['./asociacion-item.component.css']
})
export class AsociacionItemComponent implements OnInit {

  @Input() asociacion!: Asociacion;

  constructor() { }

  ngOnInit(): void {
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
