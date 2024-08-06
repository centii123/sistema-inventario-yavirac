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

    getPerson(id:any){
        return this.http.getOne('persona',id);
    }

    getAll(url=this.apiUrl) {
        return this.http.get(url);
    }

    getOne(id: number,urlData=this.apiUrl) {
        const url = `${urlData}${id}/`;
        return this.http.get(url);
    }

    add(nacionalidad: any,url=this.apiUrl) {
        return this.http.post(url, nacionalidad);
    }

    update(nacionalidad: any,url=this.apiUrl) {
        return this.http.put(url, nacionalidad);
    }

    delete(id: number,urlData=this.apiUrl): Observable<void> {
        const url = `${urlData}${id}/`;
        return this.http.delete(url);
    }

}