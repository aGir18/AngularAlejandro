import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';
import { OpticaService } from '../../service/optica.service';

@Component({
  selector: 'app-optica-modificar',
  templateUrl: './optica-modificar.component.html',
  styleUrls: ['./optica-modificar.component.css']
})
export class OpticaModificarComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() optica!: OpticaImpl;
  @Input() negocio!: NegocioImpl;
  @Output() opticaEliminar = new EventEmitter<OpticaImpl>();
  segundoModal: boolean = false;

  constructor(
    private asociacionService: AsociacionService,
    private opticaService: OpticaService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
    this.asociacionService.getAsociaciones().subscribe((response) => {
      this.asociaciones = this.asociacionService.extraerAsociaciones(response);
  });

  this.getTodasAsociaciones();
  }

  getTodasAsociaciones(): void {
    this.asociacionService.getAsociaciones().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.asociacionService.getAsociacionesPagina(index)
          .subscribe((response) => {
            this.todasAsociaciones.push(...this.asociacionService.extraerAsociaciones(response));
          });
      }
    });
  }

  eliminar(): void {
    this.opticaEliminar.emit(this.optica);
  }

  modificarOptica(optica: OpticaImpl): void {
    this.opticaService.patchOptica(optica).subscribe();
  }

  cambiarOptica(optica: OpticaImpl): void {
    this.opticaService.putOptica(optica).subscribe();
  }

  plus=faCirclePlus;
  cambio=faPenNib;

}
