import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { Bienes } from '../../model/bienes';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  modalEye: boolean = false;
  selectedData!: Bienes | any;
  @Input() list: Bienes[] = [];
  @Output() selectedOneRegister = new EventEmitter<Bienes>();
  selectedAllRegister: Bienes[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge:any;

  constructor(private crudService: CrudService, private apiService: ApiService, private messageService: MessageService) {}

  ngOnInit(): void {
    //this.getAllRegister();
  }

  /*getPerson(id:any,index:number){
    this.crudService.getPerson(id).subscribe(
      (e:Person)=>{
        this.list[index].custodio={nombre:`${e.nombres} ${e.apellidos}`,id:e}
      }
    )
  }*/

  /*getAllRegister(): void {
    this.loading = true;
    this.crudService.getAll().subscribe(
      (data: Bienes[]) => {
        this.list = data;
        this.list.forEach((e,index) => {
          this.getPerson(e.custodio,index)
        });
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching nacionalidades:', error);
        this.loading = false;
      }
    );
  }*/

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

  edit(register: Bienes): void {
    this.selectedOneRegister.emit(register);
  }

  deleteRegister(id: number): void {
    this.mensagge={
      message:'¿Esta seguro que desea eliminar este registro?',
      messageError: { severity: 'warn', summary: 'Cancelado', detail: 'Acción de eliminado Cancelado' }
    }
    this.confirmDialog?.confirm1(() => {
      this.crudService.delete(id).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Registro eliminado con exito!' });
          this.list = this.list.filter(n => n.id !== id);
        },
        (error:HttpErrorResponse) => {
          if(error.error.message="could not execute statement [ERROR: update o delete en «bienes» viola la llave foránea «fk5h9ayqb867epxqthk2551qr99» en la tabla «aula_bienes»"){
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se puede eliminar porque ahy un recurso utilizando este registro' });
          }else{
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar este recurso' });
          }
          
          console.error('Error deleting nacionalidad:', error);
        }
      );
    },this.mensagge);
    /**/
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
