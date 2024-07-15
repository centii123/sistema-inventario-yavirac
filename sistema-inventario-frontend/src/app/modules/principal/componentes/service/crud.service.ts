import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    private apiUrl = '';


    constructor(private http: ApiService, @Inject('url') apiUrl:any) { 
        this.apiUrl=apiUrl
    }

    getAll() {
        return this.http.get(this.apiUrl);
    }

    getOne(id: number) {
        const url = `${this.apiUrl}${id}/`;
        return this.http.get(url);
    }

    add(nacionalidad: any) {
        return this.http.post(this.apiUrl, nacionalidad);
    }

    update(nacionalidad: any) {
        return this.http.put(this.apiUrl, nacionalidad);
    }

    delete(id: number): Observable<void> {
        const url = `${this.apiUrl}${id}/`;
        return this.http.delete(url);
    }


}