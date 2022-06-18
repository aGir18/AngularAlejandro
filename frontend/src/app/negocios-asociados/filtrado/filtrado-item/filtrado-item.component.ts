import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faTrash, faX, faFilePen, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Negocio } from '../../models/negocio';
import { NegocioImpl } from '../../models/negocio-impl';
import { NegocioService } from '../../service/negocio.service';

@Component({
  selector: 'app-filtrado-item',
  templateUrl: './filtrado-item.component.html',
  styleUrls: ['./filtrado-item.component.css']
})
export class FiltradoItemComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  @Input() negocio: Negocio = new NegocioImpl('', '', '', '', 0, 0, '');
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
  negocioVerDatos!: Negocio;

  constructor(
    private negocioService: NegocioService,
    private asociacionService: AsociacionService,
    private auxService: AuxiliarService
    ) { }

  ngOnInit(): void {
    console.log('negocio = ', this.negocio);
    this.asociacionService.getAsociaciones().subscribe((response) => {
      this.asociaciones = this.asociacionService.extraerAsociaciones(response);
  });
  }

  borrarNegocio(direccion: string): void {
    if (confirm('¿Quiere borrar este negocio?')){
      this.negocioService.deleteNegocio(direccion).subscribe();
    }
    this.ngOnInit();
  }

  actualizarNegocio(negocio: NegocioImpl): void {
    this.negocioService.update(negocio.getIdNegocio(negocio.urlNegocio), negocio).subscribe();
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  trash2=faTrash;
  x=faX;
  modificar=faFilePen;
  cambio=faPenNib;
}
