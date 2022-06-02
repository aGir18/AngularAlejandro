import { Component, OnInit } from '@angular/core';
import { AsociacionImpl } from '../models/asociacion-impl';
import { AsociacionService } from '../service/asociacion.service';

@Component({
  selector: 'app-asociacion-form',
  templateUrl: './asociacion-form.component.html',
  styleUrls: ['./asociacion-form.component.css']
})
export class AsociacionFormComponent implements OnInit {

  asociacion: AsociacionImpl = new AsociacionImpl('', '', []);

  constructor(
    private asociacionService: AsociacionService) { }

  ngOnInit(): void {
  }


  create(): void {
    this.asociacionService.postAsociacion(this.asociacion);
  }

}
