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
  })

  loginComprobacion!:boolean;


  constructor(private router: Router, private api:ApiService) { }

  ngOnInit(): void {
    this.comprobarLogin()
  }

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  comprobarLogin(){
    if(sessionStorage.getItem('token')){
      this.loginComprobacion = true;
    }else{
      this.loginComprobacion = false;
    }

    if(this.loginComprobacion == true){
      this.router.navigate(['/home']);
    }
    
  }

  async submit() {
    if (this.loginForm.valid) {
      this.loginError = "";
      await this.api.login(this.loginForm.value.username!,this.loginForm.value.password!)
      this.router.navigateByUrl('/home');
          this.loginForm.reset();

    }
    else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }

}
