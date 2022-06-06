import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';

@Component({
  selector: 'app-optica',
  templateUrl: './optica.component.html',
  styleUrls: ['./optica.component.css']
})
export class OpticaComponent implements OnInit {

  @Input() optica!: OpticaImpl;
  @Input() negocio!: NegocioImpl;
  @Output() opticaEliminar = new EventEmitter<OpticaImpl>();
  segundoModal: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  cambioSegundoModal(): void{
    this.segundoModal = true;
  }

  cambioPrimerModal(): void{
    this.segundoModal = false;
  }

  eliminar(): void {
    this.opticaEliminar.emit(this.optica);
  }

  plus=faCirclePlus;

}
