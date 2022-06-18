import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'negocios-asociados',
    loadChildren: () => import("./negocios-asociados/negocios-asociados.module").then((m) => m.NegociosAsociadosModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'asociaciones',
    loadChildren: () => import("./asociaciones/asociaciones.module").then((m) => m.AsociacionesModule),
  },
  {
    path: 'filtrado',
    loadChildren: () => import("./filtrado-asociaciones/filtrado-asociaciones.module").then((m) => m.FiltradoAsociacionesModule),
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
