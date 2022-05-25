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
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
