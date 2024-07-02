import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { JwtInterceptorService } from './modules/auth/services/jwt-interceptor.service';
import { ErrorInterceptorService } from './modules/auth/services/error-interceptor.service';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    ButtonModule,
    TableModule,
    HttpClientModule,

    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
