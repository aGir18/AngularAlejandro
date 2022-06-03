import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { NegocioImpl } from '../../models/negocio-impl';
import { NegocioService } from '../../service/negocio.service';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.component.html',
  styleUrls: ['./negocio.component.css']
})
export class NegocioComponent implements OnInit {

  @Input() farmacia!: FarmaciaImpl;
  @Input() negocio!: NegocioImpl;
  @Output() negocioEliminar = new EventEmitter<NegocioImpl>();

  constructor(
    negocioService: NegocioService
  ) { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.negocioEliminar.emit(this.negocio);
  }

  plus=faCirclePlus;

}
