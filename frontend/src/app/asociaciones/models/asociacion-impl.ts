import { Asociacion } from "./asociacion";

export class AsociacionImpl implements Asociacion {
  nombre!: string;
  negocios!: any[];

  constructor(nombre: string, negocios: any[]){
    this.nombre = nombre;
    this.negocios = negocios;
  }

  getIdAsociacion(url: string): string {
	  url = url.slice(0, url.length - 1)
	  return url.slice(url.lastIndexOf('/') + 1, url.length);
	}

}
