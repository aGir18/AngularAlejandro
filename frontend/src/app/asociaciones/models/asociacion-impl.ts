import { Asociacion } from "./asociacion";

export class AsociacionImpl implements Asociacion {
  nombre!: string;
  negocios!: any[];
  urlAsociacion!: string;

  constructor(nombre: string, urlAsociacion: string){
    this.nombre = nombre;
    this.urlAsociacion = urlAsociacion;
  }

  getIdAsociacion(url: string): string {
	  url = url.slice(0, url.length - 1)
	  return url.slice(url.lastIndexOf('/') + 1, url.length);
	}

}
