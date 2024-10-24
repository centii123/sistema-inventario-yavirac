import { HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = '';

  constructor(private http: ApiService, @Inject('url') apiUrl: any) {
    this.apiUrl = apiUrl;
  }

  getPerson(id: any) {
    return this.http.getOne('persona', id);
  }

  getAll(url = this.apiUrl) {
    return this.http.get(url);
  }

  getOne(id: number, urlData = this.apiUrl) {
    const url = `${urlData}/${id}/`;
    return this.http.get(url);
  }

  add(data: any, url = this.apiUrl) {
    return this.http.post(url, data);
  }

  // Método para manejar FormData
  adds(data: FormData | any, endpoint: string): Observable<any> {
    const sanitizedUrl = this.apiUrl.endsWith('/') ? `${this.apiUrl}${endpoint}` : `${this.apiUrl}/${endpoint}`;
    return this.http.post(sanitizedUrl, data);
  }

  update(data: any, url = this.apiUrl) {
    return this.http.put(url, data);
  }

  delete(id: number, urlData = this.apiUrl): Observable<void> {
    const url = 
    `${urlData}${id}/`;
    return this.http.delete(url);
  }
}
