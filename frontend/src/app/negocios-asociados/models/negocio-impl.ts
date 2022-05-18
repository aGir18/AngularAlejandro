import { Negocio } from "./negocio";

export class NegocioImpl implements Negocio {
  //tipoNegocio!: string;
  //GUIJARRO
  /*
  id!: string;
  */
  nombreNegocio!: string;
  nifNegocio!: string;
  puntosSigre!: number;
  autorefractometros!: number;
  //asociación del tipo asocaición y el de abajo se llama urlAsociación; ¡¡¡uno más!!!
  asociacion!: string;

  constructor(){
  }


/*
  constructor(tipo_negocio:string, nombre: string, nif: string, numeroPuntosSigre: number, numeroAutorefractometros: number, asociacion: string){
    this.tipoNegocio = tipo_negocio;
    this.nombreNegocio = nombre;
    this.nifNegocio = nif;
    this.puntosSigre = numeroPuntosSigre;
    this.autorefractometros = numeroAutorefractometros;
    this.asociacion = asociacion;
  }*/

  getIdNegocio(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
