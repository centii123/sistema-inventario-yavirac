import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { EnfermdadCatastrofica } from '../../model/enfermedad-catastrofica';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() list: EnfermdadCatastrofica[] = [];
  @Output() selectedOneRegister = new EventEmitter<EnfermdadCatastrofica>();
  selectedAllRegister: EnfermdadCatastrofica[] = [];
  loading: boolean = false;

  constructor(private crudService: CrudService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllRegister();
  }

  getAllRegister(): void {
    this.loading = true;
    this.crudService.getAll().subscribe(
      (data: EnfermdadCatastrofica[]) => {
        this.list = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching nacionalidades:', error);
        this.loading = false;
      }
    );
  }

  exportExcel(): void {
    if (this.list.length > 0) {
      this.apiService.exportExcel(this.list, 'Nacionalidades');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  exportPdf(): void {
    if (this.list.length > 0) {
      this.apiService.exportPdf(this.list, 'Nacionalidades');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  edit(register: EnfermdadCatastrofica): void {
    this.selectedOneRegister.emit(register);
  }

  deleteRegister(id: number): void {
    this.crudService.delete(id).subscribe(
      () => {
        this.list = this.list.filter(n => n.id !== id);
      },
      (error) => {
        console.error('Error deleting nacionalidad:', error);
      }
    );
  }

  deleteSelected(): void {
    const idsToDelete = this.selectedAllRegister.map(n => n.id);
    if (idsToDelete.length === 0) {
      return;
    }

    const deleteObservables = idsToDelete.map(id => this.crudService.delete(id));
    forkJoin(deleteObservables).subscribe(
      () => {
        this.list = this.list.filter(n => !idsToDelete.includes(n.id));
        this.selectedAllRegister = [];
      },
      (error) => {
        console.error('Error deleting nacionalidades:', error);
      }
    );
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilter(event: Event, table: Table): void {
    const inputElement = event.target as HTMLInputElement;
    table.filterGlobal(inputElement.value, 'contains');
  }
}
