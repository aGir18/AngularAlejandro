import { Component, OnInit } from '@angular/core';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { NegocioImpl } from '../models/negocio-impl';
import { OpticaImpl } from '../models/optica-impl';
import { FarmaciaService } from '../service/farmacia.service';
import { NegocioService } from '../service/negocio.service';
import { OpticaService } from '../service/optica.service';

@Component({
  selector: 'app-negocio-modificar',
  templateUrl: './negocio-modificar.component.html',
  styleUrls: ['./negocio-modificar.component.css']
})
export class NegocioModificarComponent implements OnInit {

  negocio: NegocioImpl = new NegocioImpl('', '', '', '');
  farmacia: FarmaciaImpl = new FarmaciaImpl('','','',0);
  optica: OpticaImpl = new OpticaImpl('', '', '', 0);

  constructor(
    private negocioService: NegocioService,
    private opticaService: OpticaService,
    private farmaciaService: FarmaciaService
  ) { }

  ngOnInit(): void {
  }

  modificarNegocio(): void {
    this.negocioService.patchNegocio(this.negocio);
  }

  modificarFarmacia(): void {

  }

  modificarOptica(): void {

  }

}
