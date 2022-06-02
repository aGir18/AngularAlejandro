import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Farmacia } from '../models/farmacia';
import { FarmaciaService } from '../service/farmacia.service';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})
export class FarmaciasComponent implements OnInit {

  farmacias: Farmacia[] = [];
  todasFarmacias: Farmacia[] = [];
  farmaciaVerDatos!: Farmacia;
  numPaginas: number = 0;

  constructor(
    private farmaciaService: FarmaciaService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
    this.farmaciaService.getFarmacias().subscribe((response) =>  {
      this.farmacias = this.farmaciaService.extraerFarmacias(response);
    });

    this.getTodasFarmacias();
  }

  verDatosFarmacia(farmacia: Farmacia): void {
    this.farmaciaVerDatos = farmacia;
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
