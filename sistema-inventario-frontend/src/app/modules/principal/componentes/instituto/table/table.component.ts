import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { Institutos } from '../../model/instituto';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  modalEye: boolean = false;
  selectedData!: Institutos | any;
  @Input() list: Institutos[] = [];
  @Output() selectedOneRegister = new EventEmitter<Institutos>();
  selectedAllRegister: Institutos[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;

  constructor(private crudService: CrudService, private apiService: ApiService, private messageService: MessageService) { }


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

  edit(register: Institutos): void {
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
          this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Registro eliminado con exito!' });
          this.list = this.list.filter(n => n.id !== id);
        },
        (error: HttpErrorResponse) => {
          if (error.error.message = "could not execute statement [ERROR: update o delete en «bienes» viola la llave foránea «fk5h9ayqb867epxqthk2551qr99» en la tabla «aula_bienes»") {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se puede eliminar porque ahy un recurso utilizando este registro' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar este recurso' });
          }
        }
      );
    }, this.mensagge);
    /**/
  }

  deleteSelected(): void {
    const idsToDelete = this.selectedAllRegister.map(n => n.id);
    if (idsToDelete.length === 0) {
      return;
    }

    const deleteObservables = idsToDelete.map(id => this.crudService.delete(id));
    deleteObservables.forEach(e => {
      e.subscribe(
        () => {
          this.list = this.list.filter(n => !idsToDelete.includes(n.id));
          this.selectedAllRegister = [];
        },
        (error) => {
          console.error('Error deleting nacionalidades:', error);
        }
      );
    })
    //forkJoin(deleteObservables)
  }

  clear(table: Table) {
    table.clear();
  }

  applyFilter(event: Event, table: Table): void {
    const inputElement = event.target as HTMLInputElement;
    table.filterGlobal(inputElement.value, 'contains');
  }

  cancel() {
    this.modalEye = false;
    this.selectedData = null;
  }
  openModal(data: Institutos) {
    this.selectedData = data;
    this.modalEye = true;
  }

  closeModal() {
    this.modalEye = false;
    this.selectedData = null;
  }
}
