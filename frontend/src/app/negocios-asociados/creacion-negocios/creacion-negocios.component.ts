import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Negocio } from '../models/negocio';

@Component({
  selector: 'app-creacion-negocios',
  templateUrl: './creacion-negocios.component.html',
  styleUrls: ['./creacion-negocios.component.css']
})
export class CreacionNegociosComponent implements OnInit {

  public nuevoNegocio = {
    tipoNegocio: '',
    nombreNegocio: '',
    nifNegocio: '', puntosSigre: 0,
    autorefractometros:0,
    asociacion:''
  };
  public negocios: Negocio[] = [];
  public numeroNegocios = 0;

  public guardarNegocio() {
    //this.negocios.push({...this.nuevoNegocio});
    this.numeroNegocios = this.negocios.length;
  }
/*
  public postNegocio() {
    this.nuevoNegocio.http
  }*/

  public borrarNegocio(negocio: Negocio){
    this.negocios = this.negocios.filter(c => c.nombreNegocio !== negocio.nombreNegocio );
    this.numeroNegocios = this.negocios.length;
  }

  public asociaciones = [
    { id: 1, nombre: 'Félix González García'},
    { id: 2, nombre: 'Alberto Núñez Morcillo'},
    { id: 3, nombre: 'Antonio Pisón Saravia'},
    { id: 4, nombre: 'Eduardo Ríos Sasiaín'},
  ];

  public mostrarNegocios(){
    this.negocios.forEach(element => {
      element.nombreNegocio
    });
  }


  constructor() { }

  ngOnInit(): void {
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;

}
