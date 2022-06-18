import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() asociacion!: Asociacion;
  @Output() asociacionSeleccionada = new EventEmitter<Asociacion>();

  constructor(
    private asociacionService : AsociacionService
  ) { }

  ngOnInit(): void {
  }

}
