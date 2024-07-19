import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api-prefix.interceptor';
import { forkJoin } from 'rxjs';
import { Table } from 'primeng/table';
import { CrudService } from '../../service/crud.service';
import { Bienes } from '../../model/bienes';

interface Person {
  id:number;
  nombres: string;
  apellidos:string;
  [key: string]: any; // Permite otras propiedades desconocidas
}

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

  constructor(private crudService: CrudService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllRegister();
  }

  getPerson(id:any,index:number){
    this.crudService.getPerson(id).subscribe(
      (e:Person)=>{
        this.list[index].custodio={nombre:`${e.nombres} ${e.apellidos}`,id:e}
      }
    )
  }

  getAllRegister(): void {
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

  edit(register: Bienes): void {
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

  cancel() {
    this.modalEye = false;
    this.selectedData = null; 
  }

  openModal(data: Bienes) {
    this.selectedData = data;
    console.log(this.selectedData)
    this.modalEye = true;
  }

  closeModal() {
    this.modalEye = false;
    this.selectedData = null; 
  }
}
