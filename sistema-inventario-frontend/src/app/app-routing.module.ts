import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundRoutingModule } from './modules/not-found/notfound-routing.module';
import { AuthModule } from './modules/auth/auth.module';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    
    NotFoundRoutingModule,

  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
