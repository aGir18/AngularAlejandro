import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';
import { NegocioService } from '../service/negocio.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  negocios: Negocio[] = [];
  todosNegocios: Negocio[] = [];
  numPaginas: number = 0;
  negocioVerDatos!: Negocio;

  constructor(
    private negocioService: NegocioService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.negocioService.getNegocios().subscribe((response) =>  {
      this.negocios = this.negocioService.extraerNegocios(response);
      console.log('negocios = ', this.negocios);
    });

    this.getTodosNegocios();
  }

  verDatos(negocio: Negocio): void {
    this.negocioVerDatos = negocio;
  }

  onNegocioEliminar(negocio: NegocioImpl): void {
    console.log(`He eliminado a ${negocio.nombreNegocio}`);
    this.negocios = this.negocios.filter(p => negocio !== p)
  }

  getTodosNegocios(): void {
    this.negocioService.getNegocios().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.negocioService.getNegociosPagina(index)
          .subscribe(response => {
            this.todosNegocios.push(...this.negocioService.extraerNegocios(response));
          });
      }
    });
  }

}
