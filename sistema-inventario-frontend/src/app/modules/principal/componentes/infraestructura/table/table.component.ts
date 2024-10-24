import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { Infraestructura } from '../../model/infraestructura';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  modalEye: boolean = false;
  selectedData!: Infraestructura | any;
  @Input() list: Infraestructura[] = [];
  @Output() selectedOneRegister = new EventEmitter<Infraestructura>();
  selectedAllRegister: Infraestructura[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;

  constructor(
    private crudService: CrudService,
    private apiService: ApiService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const categoria = +params['categoria'];
      console.log("Categoría es:", categoria); // Verifica el valor de la categoría
      this.loadData(categoria); // Cargar datos y aplicar filtro
    });
  }

  loadData(categoria: number): void {
    this.loading = true;
    this.crudService.getAll().subscribe(
      (data: Infraestructura[]) => {
        this.list = data;
        console.log("Datos cargados:", this.list); // Verifica que los datos se cargaron correctamente
        if (categoria) {
          this.applyCategoryFilter(categoria);
        }
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al cargar los datos:', error);
        this.loading = false;
      }
    );
  }

  applyCategoryFilter(categoria: number): void {
    this.list = this.list.filter(item => +item.categoriaAula === categoria);
    console.log("Lista filtrada:", this.list); // Muestra la lista después del filtro
  }

  obtenerFecha(fechaISO: any): string {
    const indiceT = fechaISO.indexOf('T');
    if (indiceT !== -1) {
      return fechaISO.substring(0, indiceT);
    } else {
      return fechaISO;
    }
  }

  exportExcel(): void {
    if (this.list.length > 0) {
      this.apiService.exportExcel(this.list, 'Infraestructuras');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  exportPdf(): void {
    if (this.list.length > 0) {
      this.apiService.exportPdf(this.list, 'Infraestructuras');
    } else {
      console.warn('No hay datos para exportar');
    }
  }

  edit(register: Infraestructura): void {
    this.selectedOneRegister.emit(register);
  }

  deleteRegister(id: number): void {
    this.mensagge = {
      message: '¿Está seguro que desea eliminar este registro?',
      messageError: { severity: 'warn', summary: 'Cancelado', detail: 'Acción de eliminado cancelado' }
    }
    this.confirmDialog?.confirm1(() => {
      this.crudService.delete(id).subscribe(
        (e) => {
          console.log(e);
          this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Registro eliminado con éxito!' });
          this.list = this.list.filter(n => n.id !== id);
        },
        (error: HttpErrorResponse) => {
          if (error.error.message === "could not execute statement [ERROR: update o delete en «bienes» viola la llave foránea «fk5h9ayqb867epxqthk2551qr99» en la tabla «aula_bienes»") {
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
    forkJoin(deleteObservables).subscribe(
      () => {
        this.list = this.list.filter(n => !idsToDelete.includes(n.id));
        this.selectedAllRegister = [];
      },
      (error) => {
        console.error('Error deleting infraestructuras:', error);
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

  cancel() {
    this.modalEye = false;
    this.selectedData = null;
  }

  openModal(data: Infraestructura) {
    this.selectedData = data;
    console.log("los datos seleccionados son: "+ this.selectedData.categoriaAula)
    this.modalEye = true;
  }

  closeModal() {
    this.modalEye = false;
    this.selectedData = null;
  }
}
