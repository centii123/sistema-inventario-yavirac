import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guards/user.guard';
import { LoginComponent } from './modules/auth/login/login.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component:LoginComponent },
  { path: 'home', canActivate:[UserGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'estado-civil', canActivate:[UserGuard], loadChildren: () => import('./modules/principal/componentes/estado-civil/estado-civil.module').then(m => m.EstadoCivilModule) },
  { path: 'categoria-aula', canActivate:[UserGuard], loadChildren: () => import('./modules/principal/componentes/categorias-aula/categorias-aula.module').then(m => m.CategoriasAulaModule) },
  { path: 'categoria-bien', canActivate:[UserGuard], loadChildren: () => import('./modules/principal/componentes/categorias-bienes/categorias-bienes.module').then(m => m.CategoriasBienesModule) },
  { path: 'estudios-en-curso', canActivate:[UserGuard], loadChildren:() => import('./modules/principal/componentes/estudios-en-curso/estudios-en-curso.module').then(m => m.EstudiosEnCursoModule) },
  { path: 'carreras', canActivate:[UserGuard], loadChildren:() => import('./modules/principal/componentes/carreras/carreras.module').then(m => m.CarrerasModule) },
  { path: 'enfermedad-catastrofica', canActivate:[UserGuard], loadChildren:() => import('./modules/principal/componentes/enfermedad-catastrofica/enfermedad-catastrofica.module').then(m => m.EnfermdadCatastroficaModule) },
  { path: 'titulos', canActivate:[UserGuard], loadChildren: () => import('./modules/principal/componentes/titulos/titulos.module').then(m => m.TitulosModule) },
  { path: '', loadChildren: () => import('./modules/principal/principal.module').then(m => m.PrincipalModule) },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
