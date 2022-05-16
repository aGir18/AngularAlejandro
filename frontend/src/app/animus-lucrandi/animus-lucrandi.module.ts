import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimusLucrandiRoutingModule } from './animus-lucrandi-routing.module';
import { PeticionesComponent } from './peticiones/peticiones.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PeticionesComponent
  ],
  imports: [
    CommonModule,
    AnimusLucrandiRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AnimusLucrandiModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
