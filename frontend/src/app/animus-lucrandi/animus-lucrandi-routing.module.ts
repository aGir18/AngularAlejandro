import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimusLucrandiModule } from './animus-lucrandi.module';
import { PeticionesComponent } from './peticiones/peticiones.component';

const routes: Routes = [
  {
    path: '',
    component: PeticionesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimusLucrandiRoutingModule { }
