import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Bienes } from '../../model/bienes';
import { DropdownFilterOptions } from 'primeng/dropdown';


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

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService
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
      custodio: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      valorIva: new FormControl('', [Validators.required]),
      serie: new FormControl('', [Validators.required]),
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Bienes[]) => {
        this.list = data;
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
      custodio: registro.custodio['id'],
      estado: registro.estado,
      observaciones: registro.observaciones,
      valor: registro.valor,
      valorIva: registro.valorIva,
      serie: registro.serie,
    });

    console.log(this.form.value)
    
  }

  save() {
    if (this.form.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const registro: Bienes = this.form.value;

    if (registro.id) {

      this.crudService.update(registro).subscribe({
        next: () => {
          this.message = 'Nacionalidad actualizada correctamente';
          this.resetForm();
          this.load();
        },
        error: error => {
          this.message = `Error: ${error.message}`;
        }
      });
    } else {
      registro.custodio={
        "id":registro.custodio.id
      }
      this.crudService.add(registro).subscribe({
        next: () => {
          this.message = 'Bien creado correctamente';
          this.resetForm();
          this.load();
        },
        error: error => {
          this.message = `Error: ${error.message}`;
        }
      });
      
      console.log(registro)
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
    this.crudService.getAll('persona/').subscribe(
      e=>{
        this.formSelectData=e
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
