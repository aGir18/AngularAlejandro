import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules } from '@fortawesome/free-solid-svg-icons';
import { Optica } from '../models/optica';
import { OpticaImpl } from '../models/optica-impl';
import { OpticaService } from '../service/optica.service';

@Component({
  selector: 'app-opticas-item',
  templateUrl: './opticas-item.component.html',
  styleUrls: ['./opticas-item.component.css']
})
export class OpticasItemComponent implements OnInit {

  @Input() optica: Optica = new OpticaImpl('', '', '', 0);
  @Output() opticaSeleccionada = new EventEmitter<Optica>();

  constructor(
    private opticaService: OpticaService
  ) { }

  ngOnInit(): void {
  }

  borrarOptica(direccion: string): void {
    this.opticaService.deleteOptica(direccion)
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  pills= faCapsules;

}
