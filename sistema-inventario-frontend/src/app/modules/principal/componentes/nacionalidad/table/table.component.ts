import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Nacionalidad } from '../../model/nacionalidad';
import { NacionalidadService } from '../../service/nacionalidad.service';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { GlobalConfirmDialogComponent } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
confirmDeleteSelectedNacionalidades() {
throw new Error('Method not implemented.');
}
confirmDeleteNacionalidad(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() nacionalidades: Nacionalidad[] = [];
  @Output() selectedNacionalidad = new EventEmitter<Nacionalidad>();
  selectedNacionalidades: Nacionalidad[] = [];
  loading: boolean = false;
  @ViewChild(GlobalConfirmDialogComponent) confirmDialog?: GlobalConfirmDialogComponent;
  mensagge: any;

  constructor(private nacionalidadService: NacionalidadService, private apiService: ApiService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getNacionalidades();
  }

  getNacionalidades(): void {
    this.loading = true;
    this.nacionalidadService.getNacionalidades().subscribe(
      (data: Nacionalidad[]) => {
        this.nacionalidades = data;
        this.loading = false;
        console.log("Datos obtenidos");
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
    this.mensagge = {
      message: '¿Esta seguro que desea eliminar este registro?',
      messageError: { severity: 'warn', summary: 'Cancelado', detail: 'Acción de eliminado Cancelado' }
    }
    
    this.confirmDialog?.confirm1(() =>{ 
      this.nacionalidadService.deleteNacionalidad(id).subscribe(
        () => {
          this.nacionalidades = this.nacionalidades.filter(n => n.id !== id);
        },
        (error) => {
          console.error('Error deleting nacionalidad:', error);
        }
      );
    },this.mensagge);
    
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
    this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Registro eliminado con exito!' });
  }

 // Importar desde Excel
 onFileChange(event: any): void {
  const fileInput = event.target;
  const file = fileInput.files[0];

  if (file) {
    const ruta = 'nacionalidad/import';

    this.apiService.importExcel(file, ruta).subscribe(
      (result) => {
        this.getNacionalidades(); 
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Datos importados exitosamente' });

        // Limpiador del input :)
        fileInput.value = null;
      },
      (error) => {
        console.error('Error importing Excel data:', error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al importar datos' });
      }
    );
  }
}


  
}
