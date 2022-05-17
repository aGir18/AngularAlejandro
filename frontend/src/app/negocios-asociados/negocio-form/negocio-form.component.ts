import { Component, OnInit } from '@angular/core';
import { NegocioImpl } from '../models/negocio-impl';
import { NegocioService } from '../service/negocio.service';

@Component({
  selector: 'app-negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.css']
})
export class NegocioFormComponent implements OnInit {

  negocio: NegocioImpl = new NegocioImpl('', '', '', 0, 0, '');

  constructor(private negocioService: NegocioService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.negocioService.create(this.negocio);
  }
}
