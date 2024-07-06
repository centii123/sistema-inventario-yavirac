import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../request/loginRequest';
import { TokenService } from '../services/token.service';
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
  })


  constructor(private router: Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  submit() {
    if (this.loginForm.valid) {
      this.loginError = "";
      console.log(this.loginForm.value.password)
      this.api.login(this.loginForm.value.username!,this.loginForm.value.password!)
      /*this.router.navigateByUrl('/user-home');
          this.loginForm.reset();*/

    }
    else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }

}
