import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';

@Component({
  selector: 'app-negocios-item',
  templateUrl: './negocios-item.component.html',
  styleUrls: ['./negocios-item.component.css']
})
export class NegociosItemComponent implements OnInit {

  @Input() negocio: Negocio = new NegocioImpl();
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();

  constructor() { }

  ngOnInit(): void {

  }

}
