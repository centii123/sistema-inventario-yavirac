import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bienes } from '../model/bienes';

@Injectable({
  providedIn: 'root'
})
export class BienesService {
  private apiUrl = 'http://localhost:8080/bienes/';

  constructor(private http: HttpClient) {}

  private headers() {
    return new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}` 
    });
  }

  getAllBienes(): Observable<Bienes[]> {
    const headers = this.headers();
    return this.http.get<Bienes[]>(this.apiUrl, { headers });
  }

  getBienesByInfraestructuraId(infraestructuraId: number): Observable<Bienes[]> {
    const url = `${this.apiUrl}infraestructura/${infraestructuraId}`;
    const headers = this.headers();
    return this.http.get<Bienes[]>(url, { headers });
  }
}
