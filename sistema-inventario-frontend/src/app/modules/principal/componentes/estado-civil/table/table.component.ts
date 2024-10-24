import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CrudService } from '../../service/crud.service';
import { EstadoCivil } from '../../model/estado-civil';
import { MessageService } from 'primeng/api';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';
import { CrudFuncionalidadTableService } from '../../service/crud-funcionalidad-table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() list: EstadoCivil[] = [];
  @Output() selectedOneRegister = new EventEmitter<EstadoCivil>();
  selectedAllRegister: EstadoCivil[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;
  tablaFuncionalidad:CrudFuncionalidadTableService<EstadoCivil>

  constructor(private crudService: CrudService, private CrudFuncionalidadTableService: CrudFuncionalidadTableService<EstadoCivil>, private messageService: MessageService) {
    this.tablaFuncionalidad=CrudFuncionalidadTableService
  }


  edit(register: EstadoCivil): void {
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
