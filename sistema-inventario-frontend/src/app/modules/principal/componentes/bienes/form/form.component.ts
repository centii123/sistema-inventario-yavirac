import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Bienes } from '../../model/bienes';
import { MessageService } from 'primeng/api';

interface formSelectData{
    categoria:any[],
    infraestructura:any[]
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  selectedData!: Bienes | any;
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Bienes[] = [];
  modal: boolean = false;
  selected: Bienes | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  EstadoOptions: any[] = [
    { label: 'Nuevo', value: 1 },
    { label: 'Usado', value: 2 },
    { label: 'Dañado', value: 3 },
    { label: 'Reparado', value: 4 },
    { label: 'Mantenimiento', value: 5 }
  ];
  formSelectData:formSelectData={
    categoria:[],
    infraestructura:[]
  };


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
      codigoDelBien: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      estado: new FormControl(1, [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      valorIva: new FormControl('', [Validators.required]),
      serie: new FormControl('', [Validators.required]),
      categoriaBien:new FormControl('', [Validators.required]),
      infraestructura:new FormControl(null),
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Bienes[]) => {
        this.list = data;
        this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());
        this.loadingSpiner = false;

      },
      
      error: error => {
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
      codigoDelBien: registro.codigoDelBien,
      marca: registro.marca,
      estado: registro.estado,
      observaciones: registro.observaciones,
      valor: registro.valor,
      valorIva: registro.valorIva,
      serie: registro.serie,
      categoriaBien: registro.categoriaBien,
      infraestructura:registro.infraestructura ? registro.infraestructura.id : null
    });
    
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const registro: Bienes = this.form.value;
      registro.categoriaBien={
        'id':registro.categoriaBien.id
      }
      console.log(registro)
      if(typeof registro.infraestructura === 'number'){
        registro.infraestructura={
        id:registro.infraestructura
        }
      }else{
        registro.infraestructura=null
      }

    if (registro.id) {
      console.log(registro)

      this.crudService.update(registro).subscribe({
        next: () => {
          this.resetForm();
          this.load();
          this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Registro actualizado exitosamente!' });
        },
        error: error => {
        }
      });
    } else {
      
      this.crudService.add(registro).subscribe({
        next: () => {
          this.resetForm();
          this.load();
          this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
        },
        error: error => {
        }
      });
      
    }

    this.modal = false;
  }

  resetForm() {
    this.form.reset();
    this.selected = null;
  }

  cancel() {
    this.resetForm();
    this.modal = false;
  }

  openModal() {
    this.loadingSpinerForm=true
    this.resetForm();

    this.crudService.getAll('categorias-bienes/').subscribe(
      e=>{
        this.formSelectData.categoria=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('infraestructura/').subscribe(
      e=>{
        this.formSelectData.infraestructura=e
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

  
}
