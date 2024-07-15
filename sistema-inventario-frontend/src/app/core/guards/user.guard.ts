import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserJWTModel } from '../models/user-JWT.model';
import { AuthenticacionService } from '../services/authenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  private isAuthenticated: any;
  constructor(
    private router: Router,
    private authenticacionService: AuthenticacionService
  ) { }

  async canActivate(): Promise<boolean> {

    if (sessionStorage.getItem('token')) {

      try {

        this.isAuthenticated = await this.authenticacionService
          .authenticacion()
          .toPromise();
        if (this.isAuthenticated['status'] == 'ok') {

          const userString = sessionStorage.getItem('token');
          const decoded = jwtDecode<UserJWTModel>(userString!);

          if (decoded.rol == 'ROLE_ADMIN') {

            return true;

          } else {

            await this.router.navigate(['/login']);
            return false;

          }
        } else {

          await this.router.navigate(['/login']);
          return false;

        }
      } catch (error) {

        sessionStorage.removeItem('token');
        await this.router.navigate(['/login']);
        return false;

      }
    }

    await this.router.navigate(['/login']);
    return false;

  }
}
