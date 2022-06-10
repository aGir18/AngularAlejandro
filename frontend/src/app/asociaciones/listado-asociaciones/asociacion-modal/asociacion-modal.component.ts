import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Negocio } from 'src/app/negocios-asociados/models/negocio';
import { NegocioImpl } from 'src/app/negocios-asociados/models/negocio-impl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Asociacion } from '../../models/asociacion';
import { AsociacionImpl } from '../../models/asociacion-impl';
import { AsociacionService } from '../../service/asociacion.service';

@Component({
  selector: 'app-asociacion-modal',
  templateUrl: './asociacion-modal.component.html',
  styleUrls: ['./asociacion-modal.component.css']
})
export class AsociacionModalComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() asociacion!: AsociacionImpl;
  @Input() negocio!: NegocioImpl;
  @Output() negocioSeleccionado = new EventEmitter<Negocio>();
  @Output() asociacionSeleccionada = new EventEmitter<Asociacion>();


  constructor(
    private asociacionService: AsociacionService,
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

}
