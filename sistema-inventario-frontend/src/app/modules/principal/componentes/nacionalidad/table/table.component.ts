import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Nacionalidad } from '../../model/nacionalidad';
import { NacionalidadService } from '../../service/nacionalidad.service';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() nacionalidades: Nacionalidad[] = [];
  @Output() selectedNacionalidad = new EventEmitter<Nacionalidad>();
  selectedNacionalidades: Nacionalidad[] = [];
  loading: boolean = false;

  constructor(private nacionalidadService: NacionalidadService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getNacionalidades();
  }

  getNacionalidades(): void {
    this.loading = true;
    this.nacionalidadService.getNacionalidades().subscribe(
      (data: Nacionalidad[]) => {
        this.nacionalidades = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching nacionalidades:', error);
        this.loading = false;
      }
    );
  }

  exportExcel(): void {
    if (this.nacionalidades.length > 0) {
      this.apiService.exportExcel(this.nacionalidades, 'Nacionalidades');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  exportPdf(): void {
    if (this.nacionalidades.length > 0) {
      this.apiService.exportPdf(this.nacionalidades, 'Nacionalidades');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  editNacionalidad(nacionalidad: Nacionalidad): void {
    this.selectedNacionalidad.emit(nacionalidad);
  }

  deleteNacionalidad(id: number): void {
    this.nacionalidadService.deleteNacionalidad(id).subscribe(
      () => {
        this.nacionalidades = this.nacionalidades.filter(n => n.id !== id);
      },
      (error) => {
        console.error('Error deleting nacionalidad:', error);
      }
    );
  }

  deleteSelectedNacionalidad(): void {
    const idsToDelete = this.selectedNacionalidades.map(n => n.id);
    if (idsToDelete.length === 0) {
      return;
    }

    const deleteObservables = idsToDelete.map(id => this.nacionalidadService.deleteNacionalidad(id));
    forkJoin(deleteObservables).subscribe(
      () => {
        this.nacionalidades = this.nacionalidades.filter(n => !idsToDelete.includes(n.id));
        this.selectedNacionalidades = [];
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
