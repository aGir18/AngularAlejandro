import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faListOl, faList, faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Asociacion } from 'src/app/asociaciones/models/asociacion';
import { AsociacionService } from 'src/app/asociaciones/service/asociacion.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Farmacia } from '../models/farmacia';
import { FarmaciaImpl } from '../models/farmacia-impl';
import { Negocio } from '../models/negocio';
import { NegocioImpl } from '../models/negocio-impl';
import { Optica } from '../models/optica';
import { OpticaImpl } from '../models/optica-impl';
import { FarmaciaService } from '../service/farmacia.service';
import { NegocioService } from '../service/negocio.service';
import { OpticaService } from '../service/optica.service';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

  // Para meter botón de crear negocio de ESTA asociación
  negocio: NegocioImpl = new NegocioImpl('', '', '', '', 0, 0, '');
  farmacia: FarmaciaImpl = new FarmaciaImpl('','','',0);
  optica: OpticaImpl = new OpticaImpl('', '', '', 0);
  asociacionPasada!: string;

  asociaciones: Asociacion[] = [];
  todasAsociaciones: Asociacion[] = [];
  numPaginas: number = 0;
  idAsociacionSeleccionada!: string;
  negociosAsociados: Negocio[] = [];
  farmaciasAsociadas: Farmacia[] = [];
  opticasAsociadas: Optica[] = [];

  negocioVerDatos!: Negocio;
  farmaciaVerDatos!: Farmacia;
  opticaVerDatos!: Optica;

  constructor(
    private negocioService: NegocioService,
    private opticaService: OpticaService,
    private farmaciaService: FarmaciaService,
    private asociacionService: AsociacionService,
    private auxService: AuxiliarService,
    private router: Router
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

  verDatos(negocio: Negocio): void {
    this.negocioVerDatos = negocio;
  }

  verDatosFarmacia(farmacia: Farmacia): void {
    this.farmaciaVerDatos = farmacia;
  }

  verDatosOptica(optica: Optica): void {
    this.opticaVerDatos = optica;
  }

  setIdAsociacionSeleccionada(id: string){
    this.idAsociacionSeleccionada = id;
    console.log('el valor se ha cambiado a ID=', id);
    this.asociacionPasada = `${environment.host}/asociaciones/${id}`;
    console.log('La asociación ha cambiado a =', id);
  }

  hacerLlamada(idPasado: string){
    this.asociacionService.getNegociosAsociacionParticular(idPasado).subscribe((response) => {
      this.negociosAsociados = this.asociacionService.extraerNegociosAsociacionParticularNegocios(response);
    });
    this.asociacionService.setAsociacionPasada(this.asociacionPasada = `${environment.host}asociaciones/${idPasado}`);
    console.info('paso por el GET negociosAsociacion - COMPONENTE');
    console.info('El valor del idPasado es ', idPasado);
  }

  hacerLlamadaFarmacia(idPasado: string){
    this.asociacionService.getNegociosAsociacionParticular(idPasado).subscribe((response) => {
      this.farmaciasAsociadas = this.asociacionService.extraerNegociosAsociacionParticularFarmacias(response);
    });
    this.asociacionService.setAsociacionPasada(this.asociacionPasada = `${environment.host}asociaciones/${idPasado}`);
    console.info('paso por el GET negociosAsociacion - COMPONENTE');
    console.info('El valor del idPasado es ', idPasado);
  }

  hacerLlamadaOptica(idPasado: string){
    this.asociacionService.getNegociosAsociacionParticular(idPasado).subscribe((response) => {
      this.opticasAsociadas = this.asociacionService.extraerNegociosAsociacionParticularOpticas(response);
    });
    this.asociacionService.setAsociacionPasada(this.asociacionPasada = `${environment.host}asociaciones/${idPasado}`);
    console.info('paso por el GET negociosAsociacion - COMPONENTE');
    console.info('El valor del idPasado es ', idPasado);
  }

  // Para meter botón de crear negocio de ESTA asociación

  setAsociacionSeleccionada(id: string){
    this.asociacionPasada = `${environment.host}/asociaciones/${id}`;
    console.log('La asociación ha cambiado a =', id);
  }

  crearNegocio(): void {
    console.info('paso por metodo de formulario');
    this.negocioService.postNegocio(this.negocio).subscribe();
  }

  crearFarmacia(): void {
    console.warn('paso por metodo del POST Farmacia');
    this.farmaciaService.postFarmacia(this.farmacia).subscribe();
  }

  crearOptica(){
    this.opticaService.postOptica(this.optica).subscribe();
  }

  // setAsociacionSeleccionada(){
  //   this.asociacionPasada = `${environment.host}/asociaciones/${idp}`;
  // }

  // Para meter botón de crear negocio de ESTA asociación

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;


  lista2=faListOl;
  lista=faList;

}
