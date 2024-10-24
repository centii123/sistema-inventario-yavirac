import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nacionalidad } from '../model/nacionalidad';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';

@Injectable({
  providedIn: 'root'
})
export class NacionalidadService {
  private apiUrl = 'nacionalidad/';


  constructor(private http: ApiService) {}

  getNacionalidades() {
    return this.http.get(this.apiUrl);
  }

  getNacionalidad(id: number) {
     const url = `${this.apiUrl}${id}/`;
     return this.http.get(url);
   }

  addNacionalidad(nacionalidad: Nacionalidad){
    return this.http.post(this.apiUrl, nacionalidad);
  }

  updateNacionalidad(nacionalidad: Nacionalidad) {
     return this.http.put(this.apiUrl, nacionalidad);
   }

   deleteNacionalidad(id: number): Observable<void> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete(url);
  }
  

}
