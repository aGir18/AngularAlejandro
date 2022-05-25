export interface Negocio {

  idNegocio: string;
  nombre: string;
  nif: string;
  numeroPuntosSigre: number;
  numeroAutorefractometros: number;
  asociacion: string;
  tipoNegocio: string;
/*AÑADIDO AHORA*/
  getIdNegocio(url: string): string;

}
