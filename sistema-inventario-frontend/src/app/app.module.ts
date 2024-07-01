import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
//import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { JwtInterceptorService } from './modules/auth/services/jwt-interceptor.service';
import { ErrorInterceptorService } from './modules/auth/services/error-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
