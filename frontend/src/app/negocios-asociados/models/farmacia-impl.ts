import { Farmacia } from "./farmacia";

export class FarmaciaImpl implements Farmacia {

  numeroPuntosSigre!: number;
  idNegocio!: string;
  nombre!: string;
  nif!: string;
  asociacion!: string;
  tipoNegocio!: string;
  //Puesto por problemas
  numeroAutorefractometros!: number;
  //Para hacer DELETE y PATCH
  urlNegocio!: string;

  constructor(
    nombre: string,
    nif: string,
    asociacion: string,
    numeroPuntosSigre: number){

    this.nombre = nombre;
    this.nif = nif;
    this.asociacion = asociacion;
    this.numeroPuntosSigre = numeroPuntosSigre;
  }

  getIdNegocio(url: string): string {
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
