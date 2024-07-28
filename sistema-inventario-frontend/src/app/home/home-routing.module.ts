import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { DocentesPageComponent } from './docentes-page/docentes-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'docentes-page', component: DocentesPageComponent },
  { path: 'service-page', component: ServicePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
