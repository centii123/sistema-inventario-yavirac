import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserJWTModel } from '../models/user-JWT.model';
import { AuthenticacionService } from '../services/authenticacion.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  private isAuthenticated: any;
  constructor(
    private router: Router,
    private authenticacionService: AuthenticacionService,
    private spinner: SpinnerService
  ) { }

  async canActivate(): Promise<boolean> {
    
    this.spinner.show()
    if (sessionStorage.getItem('token')) {

      try {
        
        this.isAuthenticated = await this.authenticacionService
          .authenticacion()
          .toPromise();
        if (this.isAuthenticated['status'] == 'ok') {

          const userString =  sessionStorage.getItem('token');
          const decoded = jwtDecode<UserJWTModel>(userString!);

          if (decoded.rol == 'ROLE_ADMIN') {
            this.spinner.hide()
            return true;

          } else {

            await this.router.navigate(['/login']);
            this.spinner.hide()
            return false;

          }
        } else {

          await this.router.navigate(['/login']);
          this.spinner.hide()
          return false;

        }
      } catch (error) {

        sessionStorage.removeItem('token');
        await this.router.navigate(['/login']);
        this.spinner.hide()
        return false;

      }
    }

    await this.router.navigate(['/login']);
    this.spinner.hide()
    return false;

  }
}
