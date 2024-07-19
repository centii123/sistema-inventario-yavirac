import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { SpinnerService } from './core/services/spinner.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    
  ],
  providers: [
    ConfirmationService,
    SpinnerService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
