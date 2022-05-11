import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'negocios',
    //component: NegocioComponent,
    loadChildren: () => import("./nuevo-negocio/nuevo-negocio.module").then((m) => m.NuevoNegocioModule),
  },
  {
    path: 'asociaciones',
    //component: AsociacionComponent,
    //loadChildren: '.nueva-asociacion/asociacion.module#AsociacionModule'
    loadChildren: () => import("./nueva-asociacion/nueva-asociacion.module").then((m) => m.NuevaAsociacionModule),
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
