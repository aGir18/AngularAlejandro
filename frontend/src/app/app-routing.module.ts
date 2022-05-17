import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'asociaciones-negocios',
    loadChildren: () => import("./asociaciones-negocios/asociaciones-negocios.module").then((m) => m.AsociacionesNegociosModule),
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
    path: 'animus',
    loadChildren: () => import("./animus-lucrandi/animus-lucrandi.module").then((m) => m.AnimusLucrandiModule),
  },
  {
    path: 'asociaciones',
    loadChildren: () => import("./asociaciones/asociaciones.module").then((m) => m.AsociacionesModule),
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
