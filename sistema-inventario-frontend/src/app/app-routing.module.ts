import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundRoutingModule } from './modules/not-found/notfound-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrincipalRoutingModule } from './modules/principal/principal-routing.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'principal', loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    NotFoundRoutingModule,
    PrincipalRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
