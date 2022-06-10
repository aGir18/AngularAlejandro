import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faList } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { Asociacion } from '../models/asociacion';
import { AsociacionService } from '../service/asociacion.service';

@Component({
  selector: 'app-asociacion-item',
  templateUrl: './asociacion-item.component.html',
  styleUrls: ['./asociacion-item.component.css']
})
export class AsociacionItemComponent implements OnInit {

  @Input() asociacion!: Asociacion;
  @Output() asociacionSeleccionada = new EventEmitter<Asociacion>();
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
  //@Output() asociacionSeleccionada = new EventEmitter<Asociacion>();

  constructor(
    private asociacionService : AsociacionService
  ) { }

  ngOnInit(): void {
  }

  getNegocios(){
    this.asociacionService.getNegociosAsociados(this.asociacion).subscribe();
  }

  listarNegociosTercera(asociacion: string){
    return this.asociacionService.getNegociosAsociadosTercera(this.asociacion.urlAsociacion);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  lista=faList;

}
