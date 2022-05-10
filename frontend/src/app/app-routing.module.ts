import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { NegocioComponent } from './nuevo-negocio/negocio/negocio.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'negocios',
    component: NegocioComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: "not-found",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
