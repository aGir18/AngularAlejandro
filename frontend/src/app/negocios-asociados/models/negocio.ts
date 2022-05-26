export interface Negocio {

  idNegocio: string;
  nombre: string;
  nif: string;
  numeroPuntosSigre: number;
  numeroAutorefractometros: number;
  asociacion: string;
  tipoNegocio: string;
  //Para hacer DELETE y PATCH
  urlNegocio: string;
/*AÑADIDO AHORA*/
  getIdNegocio(urlNegocio: string): string;

}
