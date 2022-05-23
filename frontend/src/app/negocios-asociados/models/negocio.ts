export interface Negocio {
  //tipoNegocio: string;
  //CAMBIOS GUIJARRO
  /*
  id: string;*/
  //id number?
  idNegocio: string;
  nombre: string;
  nif: string;
  numeroPuntosSigre: number;
  numeroAutorefractometros: number;
  asociacion: string;
/*AÑADIDO AHORA*/
  getIdNegocio(url: string): string;

}
