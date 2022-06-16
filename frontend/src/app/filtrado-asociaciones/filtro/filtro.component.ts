import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  negocios: Negocio[] = [];
  asociacion!: Asociacion;
  asociaciones: Asociacion[] = [];
  asociacionVerDatos!: Asociacion;
  poseeFarmacia!: boolean;
  poseeOptica!: boolean;

  constructor(
    private asociacionService: AsociacionService
  ) { }

  ngOnInit(): void {
  }

  setPoseeFarmacia(tieneFarmacia: boolean){
    this.poseeFarmacia = tieneFarmacia;
  }

  setPoseeOptica(tieneOptica: boolean){
    this.poseeOptica = tieneOptica;
  }

  verDatos(asociacion: Asociacion): void {
    this.asociacionVerDatos = asociacion;
  }

  hacerMetodoPersonalizado(poseeFarmaciaPar: boolean, poseeOpticaPar: boolean){
    this.asociacionService.getMetodoPersonalizado(poseeFarmaciaPar, poseeOpticaPar).subscribe((response) => {
      this.asociaciones = this.asociacionService.extraerAsociacionesMetodo(response);
      });
      console.info('paso por el método personalizado - COMPONENTE');
      console.debug('El valor de poseeFarmacia es =>', poseeFarmaciaPar);
      console.debug('El valor de poseeOptica es =>', poseeOpticaPar);
    this.ngOnInit();
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;

}
