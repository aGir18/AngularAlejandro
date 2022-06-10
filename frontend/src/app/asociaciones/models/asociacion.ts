export interface Asociacion {
  nombre: string;
  negocios: any[];
  urlAsociacion: string;
  idAsociacion: string;
  getIdAsociacion(urlAsociacion: string): string;
}
