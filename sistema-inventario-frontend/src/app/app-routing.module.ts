import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guards/user.guard';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '', canActivate:[UserGuard] , children:[
      { path: 'home', canActivate:[UserGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: '', loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule) },
    ]
  },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
