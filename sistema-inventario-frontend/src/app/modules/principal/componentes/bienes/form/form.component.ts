import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Bienes } from '../../model/bienes';
import { MessageService } from 'primeng/api';

interface Person {
  id:number;
  nombres: string;
  apellidos:string;
  [key: string]: any; // Permite otras propiedades desconocidas
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Bienes[] = [];
  modal: boolean = false;
  selected: Bienes | null = null;
  message: string | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  formSelectData!:any[];
  formSelectDataCategoria!:any[];

  getPerson(id:any,index:number){
    if(typeof id == 'number'){
      this.crudService.getPerson(id).subscribe(
        (e:Person)=>{
          this.list[index].custodio={nombre:`${e.nombres} ${e.apellidos}`,id:e}
        },
        err=>{
          this.list[index].custodio={nombre:'sin custodio',id:null}
        }
      )
    }else{
      this.list[index].custodio={nombre:'sin custorio',id:null}
    }
    
  }

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private messageService: MessageService
  ) {
    this.form= this.initForm();
  }

  ngOnInit(): void {
    this.load();
  }

  get f() {
    return this.form.controls;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(null),
      descripcion: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      codigoDelBien: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      custodio: new FormControl(null) ,
      estado: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      valorIva: new FormControl('', [Validators.required]),
      serie: new FormControl('', [Validators.required]),
      categoriaBien:new FormControl('', [Validators.required]),
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Bienes[]) => {
        this.list = data;
        this.list.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        this.list.forEach((e,index) => {
          this.getPerson(e.custodio,index)
        });
        
        this.loadingSpiner = false;

      },
      
      error: error => {
        this.message = `Error: ${error.message}`;
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Bienes) {
    this.selected = registro;
    this.openModal()
    this.form.setValue({
      id: registro.id,
      descripcion: registro.descripcion,
      nombre: registro.nombre,
      codigoDelBien: registro.codigoDelBien,
      marca: registro.marca,
      modelo: registro.modelo,
      custodio: registro.custodio['id'] || null,
      estado: String(registro.estado),
      observaciones: registro.observaciones,
      valor: registro.valor,
      valorIva: registro.valorIva,
      serie: registro.serie,
      categoriaBien: registro.categoriaBien
    });
    
  }

  save() {
    if (this.form.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const registro: Bienes = this.form.value;
    registro.custodio=registro.custodio?.id ?? null
      registro.estado=Boolean(registro.estado)
      registro.categoriaBien={
        'id':registro.categoriaBien.id
      }

    if (registro.id) {

      this.crudService.update(registro).subscribe({
        next: () => {
          this.message = 'Nacionalidad actualizada correctamente';
          this.resetForm();
          this.load();
          this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Registro actualizado exitosamente!' });
        },
        error: error => {
          this.message = `Error: ${error.message}`;
        }
      });
    } else {
      
      this.crudService.add(registro).subscribe({
        next: () => {
          this.message = 'Bien creado correctamente';
          this.resetForm();
          this.load();
          this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
        },
        error: error => {
          this.message = `Error: ${error.message}`;
        }
      });
      
    }

    this.modal = false;
  }

  delete(id: number) {
    this.crudService.delete(id).subscribe({
      next: () => {
        this.message = 'Nacionalidad eliminada correctamente';
        this.load();
      },
      error: error => {
        this.message = `Error: ${error.message}`;
      }
    });
  }

  resetForm() {
    this.form.reset();
    this.selected = null;
  }

  cancel() {
    this.resetForm();
    this.modal = false;
    this.message = 'Acción Cancelada';
  }

  openModal() {
    this.loadingSpinerForm=true
    this.resetForm();
    this.crudService.getAll('persona/').subscribe(
      e=>{
        this.formSelectData=e
      },
      error=>{
        console.error(error)
      }
    )
    this.crudService.getAll('categorias-bienes/').subscribe(
      e=>{
        this.formSelectDataCategoria=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.modal = true;
  }

  closeModal() {
    this.resetForm();
    this.modal = false;
  }

  get selectedCustodio() {
    return this.form.get('custodio')?.value;
  }

  getOptionLabel(data: any): string {
    return `${data.dni} - ${data.nombres}`;
  }






}
