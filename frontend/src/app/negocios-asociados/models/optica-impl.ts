import { Optica } from "./optica";

export class OpticaImpl implements Optica {

  numeroAutorefractometros!: number;
  idNegocio!: string;
  nombre!: string;
  nif!: string;
  asociacion!: string;
  tipoNegocio!: string;
  //Puesto por problemas
  numeroPuntosSigre!: number;
  //Para hacer DELETE y PATCH
  urlNegocio!: string;

  constructor(
    nombre: string,
    nif: string,
    asociacion: string,
    numeroAutorefractometros: number){

    this.nombre = nombre;
    this.nif = nif;
    this.asociacion = asociacion;
    this.numeroAutorefractometros = numeroAutorefractometros;
  }

  getIdNegocio(url: string): string {
    // url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
