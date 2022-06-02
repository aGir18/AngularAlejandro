import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { NegocioImpl } from '../../models/negocio-impl';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit {

  @Input() farmacia!: FarmaciaImpl;
  @Input() negocio!: NegocioImpl;
  @Output() farmaciaEliminar = new EventEmitter<FarmaciaImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.farmaciaEliminar.emit(this.farmacia);
  }

  // getId(url:string): string {
  //   let posicionFinal: number = url.lastIndexOf('/');
  //   let numId: string = url.slice(posicionFinal + 1, url.length);
  //   return numId;
  // }

  plus=faCirclePlus;

}
