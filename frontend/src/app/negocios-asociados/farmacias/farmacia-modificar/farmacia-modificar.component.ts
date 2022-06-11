import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus, faPencil, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { NegocioImpl } from '../../models/negocio-impl';
import { FarmaciaService } from '../../service/farmacia.service';

@Component({
  selector: 'app-farmacia-modificar',
  templateUrl: './farmacia-modificar.component.html',
  styleUrls: ['./farmacia-modificar.component.css']
})
export class FarmaciaModificarComponent implements OnInit {

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  @Input() farmacia!: FarmaciaImpl;
  @Input() negocio!: NegocioImpl;

  constructor(
    private asociacionService: AsociacionService,
    private farmaciaService: FarmaciaService,
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

  modificarFarmacia(farmacia: FarmaciaImpl): void {
    this.farmaciaService.update(farmacia.getIdNegocio(farmacia.urlNegocio), farmacia).subscribe();
  }

  plus=faCirclePlus;
  cambio=faPenNib;
  pencil=faPencil;

}
