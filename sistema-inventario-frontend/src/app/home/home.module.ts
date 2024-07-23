import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from '../shared/card/card.module';


@NgModule({
  declarations: [
    HomePageComponent,
    ServicePageComponent,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    FormsModule,
    CardModule
  ],
  exports: [
    HomePageComponent,
    ServicePageComponent,
    AboutPageComponent,
    ContactPageComponent
  ]
})
export class HomeModule { }
