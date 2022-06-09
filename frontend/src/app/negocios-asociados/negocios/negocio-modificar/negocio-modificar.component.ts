import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';
import { NegocioService } from '../../service/negocio.service';

@Component({
  selector: 'app-negocio-modificar',
  templateUrl: './negocio-modificar.component.html',
  styleUrls: ['./negocio-modificar.component.css']
})
export class NegocioModificarComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() optica!: OpticaImpl;
  @Input() negocio!: NegocioImpl;
  @Output() opticaEliminar = new EventEmitter<OpticaImpl>();

  constructor(
    private asociacionService: AsociacionService,
    private negocioService: NegocioService,
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

  cambiarNegocio(negocio: NegocioImpl): void {
    this.negocioService.putNegocio(negocio).subscribe();
  }

  plus=faCirclePlus;
  cambio=faPenNib;

}
