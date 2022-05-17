import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NegocioImpl } from '../../models/negocio-impl';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  @Input() negocio!: NegocioImpl;
  @Output() negocioEliminar = new EventEmitter<NegocioImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.negocioEliminar.emit(this.negocio);
  }

}
