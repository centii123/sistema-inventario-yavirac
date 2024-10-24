import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CrudService } from '../../service/crud.service';
import { CategoriaAula } from '../../model/categoria-aula';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { CrudFuncionalidadTableService } from '../../service/crud-funcionalidad-table.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  @Input() list: CategoriaAula[] = [];
  @Output() selectedOneRegister = new EventEmitter<CategoriaAula>();
  selectedAllRegister: CategoriaAula[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;
  tablaFuncionalidad:CrudFuncionalidadTableService<CategoriaAula>

  constructor(private crudService: CrudService, private CrudFuncionalidadTableService: CrudFuncionalidadTableService<CategoriaAula>, private messageService: MessageService) {
    this.tablaFuncionalidad=CrudFuncionalidadTableService
  }


  edit(register: CategoriaAula): void {
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
            (error) => {
                if (error.error.message = "could not execute statement [ERROR: update o delete en ") {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se puede eliminar porque ahy un recurso utilizando este registro' });
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
        console.error('Error deleting nacionalidades:', error);
      }
    );
  }
}
