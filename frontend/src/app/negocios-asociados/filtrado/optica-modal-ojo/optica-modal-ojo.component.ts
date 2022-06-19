import { Component, Input, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';

@Component({
  selector: 'app-optica-modal-ojo',
  templateUrl: './optica-modal-ojo.component.html',
  styleUrls: ['./optica-modal-ojo.component.css']
})
export class OpticaModalOjoComponent implements OnInit {

  @Input() optica!: OpticaImpl;
  @Input() negocio!: NegocioImpl;

  constructor() { }

  ngOnInit(): void {
  }

  plus=faCirclePlus;

}
