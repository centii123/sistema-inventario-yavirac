import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public isAuthenticated: boolean = false;

  constructor() { }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  getIsAuthenticated(): boolean {
    if(!this.isLogged()){
      return false
     }else {
      this.isAuthenticated = true;
     }
    return this.isAuthenticated;
  }

  setToken(accessToke: string): void {
    localStorage.setItem('accessToke', accessToke);
    console.log('accessToke', accessToke);
  }

  getToken(): string {
    return localStorage.getItem('accessToke')!;
  }

  getUserNameFromToken(): string | null{
    const nombreToke = this.getToken();
   
    if(!this.isLogged()){
     return null
    }

    const payload = nombreToke.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const name =  valuesJson.name;
    return name;
  }

  getUserIdFromToken(): string | null{
    const idToke = this.getToken();
   
    if(!this.isLogged()){
     return null
    }

    const payload = idToke.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const userId =  valuesJson.sub;
    console.log('id:', userId);
    return userId;
  }
}
