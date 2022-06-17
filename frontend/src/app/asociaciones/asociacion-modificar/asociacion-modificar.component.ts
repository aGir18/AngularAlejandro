import { Component, Input, OnInit } from '@angular/core';
import { faCirclePlus, faPenNib, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FarmaciaService } from 'src/app/negocios-asociados/service/farmacia.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { AsociacionImpl } from '../models/asociacion-impl';
import { AsociacionService } from '../service/asociacion.service';

@Component({
  selector: 'app-asociacion-modificar',
  templateUrl: './asociacion-modificar.component.html',
  styleUrls: ['./asociacion-modificar.component.css']
})
export class AsociacionModificarComponent implements OnInit {

  @Input() asociacion!: AsociacionImpl;

  constructor(
    private asociacionService: AsociacionService,
    private farmaciaService: FarmaciaService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
  }

  modificarAsociacion(asociacion: AsociacionImpl): void {
    this.asociacionService.patchAsociacion(asociacion.getIdAsociacion(asociacion.urlAsociacion), asociacion).subscribe();
  }

  plus=faCirclePlus;
  cambio=faPenNib;
  pencil=faPencil;

}
