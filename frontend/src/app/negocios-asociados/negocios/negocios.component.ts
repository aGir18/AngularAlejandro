import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Farmacia } from '../models/farmacia';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';
import { FarmaciaService } from '../service/farmacia.service';
import { NegocioService } from '../service/negocio.service';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  //cambiado
  //negocios: NegocioImpl[] = [];
  negocios: Negocio[] = [];
  farmacias: Farmacia[] = [];
  todosNegocios: Negocio[] = [];
  todasFarmacias: Farmacia[] = [];
  numPaginas: number = 0;
  negocioVerDatos!: Negocio;
  farmaciaVerDatos!: Farmacia;


  constructor(
    private negocioService: NegocioService,
    private farmaciaService: FarmaciaService,
    private auxService: AuxiliarService) { };

  ngOnInit(): void {
    this.negocioService.getNegocios().subscribe((response) =>  {
      this.negocios = this.negocioService.extraerNegocios(response);
      console.log('negocios = ', this.negocios);
      console.log('tipo negocio = ', this.negocios[1] instanceof NegocioImpl);
    });
    this.getTodosNegocios();

    this.farmaciaService.getFarmacias().subscribe((response) =>  {
      this.farmacias = this.farmaciaService.extraerFarmacias(response);
    });
    this.getTodasFarmacias();

  }

  verDatos(negocio: Negocio): void {
    this.negocioVerDatos = negocio;
  }

  verDatosFarmacia(farmacia: Farmacia): void {
    this.farmaciaVerDatos = farmacia;
  }

  onNegocioEliminar(negocio: NegocioImpl): void {
    console.log(`He eliminado a ${negocio.nombre}`);
    this.negocios = this.negocios.filter(p => negocio !== p)
  }

  getTodosNegocios(): void {
    this.negocioService.getNegocios().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.negocioService.getNegociosPagina(index)
          .subscribe((response) => {
            this.todosNegocios.push(...this.negocioService.extraerNegocios(response));
          });
      }
    });
  }

  getTodasFarmacias(): void {
    this.farmaciaService.getFarmacias().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.farmaciaService.getFarmaciasPagina(index)
          .subscribe((response) => {
            this.todasFarmacias.push(...this.farmaciaService.extraerFarmacias(response));
          });
      }
    });
  }

  plus=faCirclePlus;

}
