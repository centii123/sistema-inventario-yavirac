import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';


@Injectable({
    providedIn: 'root'
})
export class AuthenticacionService {
    private Url = 'autenticacion-login/'

    constructor(private apiService: ApiService) { }

    authenticacion() {
        return this.apiService.get(this.Url)
    }


}