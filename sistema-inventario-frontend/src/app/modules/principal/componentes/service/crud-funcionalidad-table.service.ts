import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { Table } from 'primeng/table';

@Injectable({
    providedIn: 'root'
})
export class CrudFuncionalidadTableService<Tipo> {

    constructor(private apiService: ApiService) { }

    exportExcel(Name:string,list:Tipo[]): void {
        if (list.length > 0) {
            this.apiService.exportExcel(list, Name);
        } else {
            console.warn('No hay datos para exportar');
        }
    }

    exportPdf(Name:string,list:Tipo[]): void {
        if (list.length > 0) {
            this.apiService.exportPdf(list, Name);
        } else {
            console.warn('No hay datos para exportar');
        }
    }

    clear(table: Table) {
        table.clear();
    }

    applyFilter(event: Event, table: Table): void {
        const inputElement = event.target as HTMLInputElement;
        table.filterGlobal(inputElement.value, 'contains');
    }
}