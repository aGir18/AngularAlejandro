import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Optica } from '../models/optica';
import { OpticaService } from '../service/optica.service';

@Component({
  selector: 'app-opticas',
  templateUrl: './opticas.component.html',
  styleUrls: ['./opticas.component.css']
})
export class OpticasComponent implements OnInit {

  opticas: Optica[] = [];
  todasOpticas: Optica[] = [];
  opticasVerDatos!: Optica;
  numPaginas: number = 0;
  segundoModal: boolean = false;

  constructor(
    private opticaService: OpticaService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
    this.opticaService.getOpticas().subscribe((response) =>  {
      this.opticas = this.opticaService.extraerOpticas(response);
    });

    this.getTodasOpticas();
  }

  cambioSegundoModal(): void{
    this.segundoModal = true;
    console.log('paso al segundo modal');
  }

  cambioPrimerModal(): void{
    this.segundoModal = false;
    console.log('vuelvo al primer modal');
  }

  verDatosOptica(optica: Optica): void {
    this.opticasVerDatos = optica;
  }

  getTodasOpticas(): void {
    this.opticaService.getOpticas().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.opticaService.getOpticasPagina(index)
          .subscribe((response) => {
            this.todasOpticas.push(...this.opticaService.extraerOpticas(response));
          });
      }
    });
  }

  plus=faCirclePlus;

}
