import { Negocio } from "./negocio";

export class NegocioImpl implements Negocio {
  //tipoNegocio!: string;
  //GUIJARRO
  /*
  id!: string;
  */
  idNegocio!: string;
  nombre!: string;
  nif!: string;
  numeroPuntosSigre!: number;
  numeroAutorefractometros!: number;
  //asociación del tipo asocaición y el de abajo se llama urlAsociación; ¡¡¡uno más!!!
  asociacion!: string;
  tipoNegocio!: string;
  //Para hacer DELETE y PATCH
  urlNegocio!: string;
/*  constructor(){
  } */

/*   constructor(nombre: string, nif: string, asociacion: string, tipoNegocio: string){
    this.nombre = nombre;
    this.nif = nif;
    this.asociacion = asociacion;
    this.tipoNegocio = tipoNegocio;
  } */

  constructor(nombre: string, nif: string, asociacion: string, tipoNegocio: string, numeroPuntosSigre: number, numeroAutorefractometros: number){
    this.nombre = nombre;
    this.nif = nif;
    this.asociacion = asociacion;
    this.tipoNegocio = tipoNegocio;
    this.numeroPuntosSigre = numeroPuntosSigre;
    this.numeroPuntosSigre = numeroPuntosSigre;
  }

  //Para hacer DELETE y PATCH
  getIdNegocio(urlNegocio: string): string {
    urlNegocio = urlNegocio.slice(0, urlNegocio.length - 1)
    return urlNegocio.slice(urlNegocio.lastIndexOf('/') + 1, urlNegocio.length);
  }

}
