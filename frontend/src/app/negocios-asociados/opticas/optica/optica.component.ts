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

  constructor() { }

  ngOnInit(): void {
  }

  plus=faCirclePlus;

}
