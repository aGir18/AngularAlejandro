import { Component, Input, OnInit } from '@angular/core';
import { NegocioImpl } from '../../models/negocio-impl';
import { NegocioService } from '../../service/negocio.service';

@Component({
  selector: 'app-filtrado-negocio-modal',
  templateUrl: './filtrado-negocio-modal.component.html',
  styleUrls: ['./filtrado-negocio-modal.component.css']
})
export class FiltradoNegocioModalComponent implements OnInit {

  @Input() negocio!: NegocioImpl;

  constructor(
    negocioService: NegocioService
  ) { }

  ngOnInit(): void {
  }

}
