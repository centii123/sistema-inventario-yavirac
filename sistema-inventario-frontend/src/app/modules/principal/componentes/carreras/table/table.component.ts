import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { Carreras } from '../../model/carreras';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() list: Carreras[] = [];
  @Output() selectedOneRegister = new EventEmitter<Carreras>();
  selectedAllRegister: Carreras[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;

  constructor(private crudService: CrudService, private apiService: ApiService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAllRegister();
  }

  getAllRegister(): void {
    this.loading = true;
    this.crudService.getAll().subscribe(
      (data: Carreras[]) => {
        this.list = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching carreras:', error);
        this.loading = false;
      }
    );
  }

  exportExcel(): void {
    if (this.list.length > 0) {
      this.apiService.exportExcel(this.list, 'Carreras');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  exportPdf(): void {
    if (this.list.length > 0) {
      this.apiService.exportPdf(this.list, 'Carreras');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  edit(register: Carreras): void {
    this.selectedOneRegister.emit(register);
  }

  deleteRegister(id: number): void {
    this.mensagge = {
      message: '¿Esta seguro que desea eliminar este registro?',
      messageError: { severity: 'warn', summary: 'Cancelado', detail: 'Acción de eliminado Cancelado' }
    }
    this.confirmDialog?.confirm1(() => {
    this.crudService.delete(id).subscribe(
      () => {
        this.list = this.list.filter(n => n.id !== id);
      },
      (error) => {
        console.error('Error deleting carrera:', error);
      }
    );}, this.mensagge);
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
        console.error('Error deleting carreras:', error);
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
