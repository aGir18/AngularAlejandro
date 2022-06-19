import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmacia } from '../../models/farmacia';
import { FarmaciaImpl } from '../../models/farmacia-impl';
import { FarmaciaService } from '../../service/farmacia.service';

@Component({
  selector: 'app-farmacia-leer-item',
  templateUrl: './farmacia-leer-item.component.html',
  styleUrls: ['./farmacia-leer-item.component.css']
})
export class FarmaciaLeerItemComponent implements OnInit {

  farmacia: Farmacia = new FarmaciaImpl('','','', 0);

  constructor(
    private farmaciaService: FarmaciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id: string = this.cargarFarmacia();
    // this.farmaciaService.getId(id).subscribe(response =>
    //   this.operacion = this.operacionService.mapearOperacion(response));
  }

  cargarFarmacia(): string {
    return this.activatedRoute.snapshot.params['id'];
  }


}
