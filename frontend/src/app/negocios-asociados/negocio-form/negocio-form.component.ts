import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { NegocioImpl } from '../models/negocio-impl';
import { FarmaciaService } from '../service/farmacia.service';
import { NegocioService } from '../service/negocio.service';

@Component({
  selector: 'app-negocio-form',
  templateUrl: './negocio-form.component.html',
  styleUrls: ['./negocio-form.component.css']
})
export class NegocioFormComponent implements OnInit {

  negocio: NegocioImpl = new NegocioImpl('', '', '', '');
  farmacia: FarmaciaImpl = new FarmaciaImpl('','','',0);
  //negocios!: Negocio[];

  constructor(private negocioService: NegocioService,
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

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
}
