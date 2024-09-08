import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: String = "";
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  loginComprobacion!: boolean;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.comprobarLogin();
  }

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  comprobarLogin() {
    if (sessionStorage.getItem('token')) {
      this.loginComprobacion = true;
    } else {
      this.loginComprobacion = false;
    }

    if (this.loginComprobacion == true) {
      this.router.navigate(['/home']);
    }
  }

  async submit() {
    if (this.loginForm.valid) {
      this.loginError = "";
      try {
        await this.api.login(this.loginForm.value.username!, this.loginForm.value.password!);
        this.router.navigateByUrl('/home');
        this.loginForm.reset();
      } catch (error: unknown) {
        if (this.isHttpErrorResponse(error) && error.status === 401) {
          this.loginError = "El usuario o la contraseña son incorrectos.";
        } else {
          this.loginError = "Error al iniciar sesión. Por favor, inténtelo de nuevo.";
        }
      }
    } else {
      this.loginError = "EL usuario o contraseña son incorrectos.";
      this.loginForm.markAllAsTouched();
    }
  }

  private isHttpErrorResponse(error: unknown): error is HttpErrorResponse {
    return typeof error === 'object' && error !== null && 'status' in error;
  }
}
