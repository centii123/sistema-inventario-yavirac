import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserJWTModel } from '../models/user-JWT.model';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userString = sessionStorage.getItem('token');
    if (userString) {
      console.log(userString)
    const decoded = jwtDecode<UserJWTModel>(userString!);
    console.log(decoded)
    
    if (decoded.rol=="ROLE_ADMIN") {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
    }else{
      this.router.navigate(['/']);
      return false;
    }
    
    
  }
}