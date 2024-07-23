import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Bienes } from '../../model/bienes';
import { MessageService } from 'primeng/api';

interface Person {
  id:number;
  nombres: string;
  apellidos:string;
  [key: string]: any;
}

interface formSelectData{
  persona:any[],
    categoria:any[],
    aula:any[]
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Bienes[] = [];
  modal: boolean = false;
  selected: Bienes | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  formSelectData:formSelectData={
    persona:[],
    categoria:[],
    aula:[]
  };

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
      aula:new FormControl(null),
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
      categoriaBien: registro.categoriaBien,
      aula:registro.aula ? registro.aula.id : null
    });
    
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const registro: Bienes = this.form.value;
    registro.custodio=registro.custodio?.id ?? null
      registro.estado=Boolean(registro.estado)
      registro.categoriaBien={
        'id':registro.categoriaBien.id
      }
      console.log(registro)
      if(typeof registro.aula === 'number'){
        registro.aula={
          id:registro.aula
        }
      }else{
        registro.aula=null
      }

    if (registro.id) {

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
    this.crudService.getAll('persona/').subscribe(
      e=>{
        this.formSelectData.persona=e
      },
      error=>{
        console.error(error)
      }
    )
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
    this.crudService.getAll('aula/').subscribe(
      e=>{
        this.formSelectData.aula=e
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
