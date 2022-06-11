import { Component, Input, OnInit } from '@angular/core';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { NegocioImpl } from '../../models/negocio-impl';
import { OpticaImpl } from '../../models/optica-impl';
import { OpticaService } from '../../service/optica.service';

@Component({
  selector: 'app-patch-optica',
  templateUrl: './patch-optica.component.html',
  styleUrls: ['./patch-optica.component.css']
})
export class PatchOpticaComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() optica!: OpticaImpl;
  @Input() negocio!: NegocioImpl;

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

  patchOptica(){
    this.opticaService.update(this.optica.getIdNegocio(this.optica.urlNegocio), this.optica).subscribe();
  }

}
