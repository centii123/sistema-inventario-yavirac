import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DocentesPageComponent } from './docentes-page/docentes-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'docentes-page', component: DocentesPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
