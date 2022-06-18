import { Component, Input, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';

@Component({
  selector: 'app-filtrado-optica',
  templateUrl: './filtrado-optica.component.html',
  styleUrls: ['./filtrado-optica.component.css']
})
export class FiltradoOpticaComponent implements OnInit {

  @Input() optica!: OpticaImpl;
  @Input() negocio!: NegocioImpl;

  constructor() { }

  ngOnInit(): void {
  }

  plus=faCirclePlus;

}
