import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { NegocioImpl } from '../models/negocio-impl';
import { OpticaImpl } from '../models/optica-impl';
import { FarmaciaService } from '../service/farmacia.service';
import { NegocioService } from '../service/negocio.service';
import { OpticaService } from '../service/optica.service';

@Component({
  selector: 'app-negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.css']
})
export class NegocioFormComponent implements OnInit {

//  negocio: NegocioImpl = new NegocioImpl('', '', '', '');
  negocio: NegocioImpl = new NegocioImpl('', '', '', '', 0, 0);

  farmacia: FarmaciaImpl = new FarmaciaImpl('','','',0);
  optica: OpticaImpl = new OpticaImpl('', '', '', 0);
  asociaciones: Asociacion[] = [];

  constructor(
    private negocioService: NegocioService,
    private opticaService: OpticaService,
    private farmaciaService: FarmaciaService) { }

  ngOnInit(): void {
  }

  create(): void {
    //this.negocioService.create(this.negocio);
    console.info('paso por metodo de formulario');
    this.negocioService.postNegocio(this.negocio);
    //this.negocioService.http.post(this.negocioService.urlEndPoint, this.negocio);

    //this.negocioService.create(this.negocio).subscribe;
  }

  crearFarmacia(): void {
    console.warn('paso por metodo del POST Farmacia');
    this.farmaciaService.postFarmacia(this.farmacia);
    //this.negocioService.postFarmaciaNegocio(this.farmacia);
  }

  crearOptica(): void {
    this.opticaService.postOptica(this.optica);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
}
