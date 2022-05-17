import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimusLucrandiRoutingModule } from './animus-lucrandi-routing.module';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeticionesItemComponent } from './peticiones-item/peticiones-item.component';
import { AuxiliarService } from '../service/auxiliar.service';


@NgModule({
  declarations: [
    PeticionesComponent,
    PeticionesItemComponent
  ],
  imports: [
    CommonModule,
    AnimusLucrandiRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuxiliarService
  ]
})
export class AnimusLucrandiModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
