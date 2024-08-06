import { Component, Input, Output, EventEmitter, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { Subscription } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { BienesService } from '../../service/bienes.service';  
import { Bienes } from '../../model/bienes';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {  
  modalEye: boolean = false;
  selectedData!: Bienes | any;
  @Input() list: Bienes[] = [];
  @Output() selectedOneRegister = new EventEmitter<Bienes>();
  selectedAllRegister: Bienes[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private crudService: CrudService, 
    private bienesService: BienesService,  
    private apiService: ApiService, 
    private messageService: MessageService,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe(params => {
        const infraestructuraId = +params.get('id')!; 
        if (infraestructuraId) {
          this.getBienesByInfraestructuraId(infraestructuraId);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getBienesByInfraestructuraId(id: number): void {
    this.loading = true;
    this.list = []; 
    this.subscriptions.add(
      this.bienesService.getBienesByInfraestructuraId(id).subscribe(
        (data) => {
          console.log(data);
          this.list = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error al obtener bienes:', error);
          this.loading = false;
        }
      )      
    );
  }

  exportExcel(): void {
    if (this.list.length > 0) {
      this.apiService.exportExcel(this.list, 'Bienes');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  exportPdf(): void {
    if (this.list.length > 0) {
      this.apiService.exportPdf(this.list, 'Bienes');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  edit(register: Bienes): void {
    this.selectedOneRegister.emit(register);
  }

  deleteRegister(id: number): void {
    this.mensagge = {
      message: '¿Está seguro que desea eliminar este registro?',
      messageError: { severity: 'warn', summary: 'Cancelado', detail: 'Acción de eliminado cancelado' }
    };
    this.confirmDialog?.confirm1(() => {
      this.crudService.delete(id).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Registro eliminado con éxito!' });
          this.list = this.list.filter(n => n.id !== id);
        },
        (error: HttpErrorResponse) => {
          if (error.error.message === "could not execute statement [ERROR: update or delete on table \"bienes\" violates foreign key constraint \"fk5h9ayqb867epxqthk2551qr99\" on table \"aula_bienes\"]") {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se puede eliminar porque hay un recurso utilizando este registro' });
          } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar este recurso' });
          }
        }
      );
    }, this.mensagge);
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
          console.error('Error deleting bienes:', error);
        }
      );
    });
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

  openModal(data: Bienes) {
    this.selectedData = data;
    this.modalEye = true;
  }

  closeModal() {
    this.modalEye = false;
    this.selectedData = null; 
  }
}
