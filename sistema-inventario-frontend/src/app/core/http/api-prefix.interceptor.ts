import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private apiUrl: any;
  
    constructor(private http: HttpClient) {
      this.apiUrl = 'http://localhost:8080'
  
    }
  
    /*get(ruta:string): Observable<any[]> {
      if(localStorage.getItem('token')){
        const headers = new HttpHeaders({
          'Authorization': `${localStorage.getItem('token')}`
        });
        return this.http.get<any[]>(`${this.apiUrl}/${ruta}`,{headers});
      }
      return this.http.get<any[]>(`${this.apiUrl}/${ruta}`);
    }*/
  
    async login(username: string, password: string) {

      const fecher = async (url: string, token: string) => {
        return await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': token
          }
        })
      }

      const token = 'Basic ' + btoa(`${username}:${password}`);

      const response = await fecher(this.apiUrl + '/login', token);

      if (response.ok) {

        let bearerToken = response.headers.get("Authorization") || "";

        sessionStorage.setItem("token",bearerToken);

        const decoded = jwtDecode(bearerToken);

        console.log(decoded)
        
      }
    }
}