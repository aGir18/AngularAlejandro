import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AsociacionService } from '../service/asociacion.service';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.css']
})
export class AsociacionComponent implements OnInit {

  asociacion$!: Observable<any>;

  constructor(
    private activateRoute: ActivatedRoute,
    private asociacionService: AsociacionService) { }

  ngOnInit(): void {
    this.asociacion$ = this.cargarAsociacion();
  }

  cargarAsociacion(): any {
    return this.asociacionService.getAsociacion(this.activateRoute.snapshot.params['id']);

  }
}
