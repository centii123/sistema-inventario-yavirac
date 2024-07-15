import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Nacionalidad } from '../../model/nacionalidad';
import { NacionalidadService } from '../../service/nacionalidad.service';
import { CrudService } from '../../service/crud.service';
import { EstadoCivil } from '../../model/estado-civil';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  list: EstadoCivil[] = [];
  modal: boolean = false;
  loading: boolean = false;
  selected: EstadoCivil | null = null;
  message: string | null = null;

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
      nombre: new FormControl('', [Validators.required])
    });
  }

  load() {
    this.loading = true;
    this.crudService.getAll().subscribe({
      next: (data: EstadoCivil[]) => {
        this.list = data;
        this.loading = false;
      },
      error: error => {
        this.message = `Error: ${error.message}`;
        this.loading = false;
      }
    });
  }

  setSeleccionado(registro: EstadoCivil) {
    this.selected = registro;
    this.form.setValue({
      id: registro.id,
      nombre: registro.nombre
    });
    this.modal = true;
  }

  save() {
    if (this.form.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const registro: EstadoCivil = this.form.value;

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
  
      this.crudService.add(registro).subscribe({
        next: () => {
          this.message = 'Nacionalidad creada correctamente';
          this.resetForm();
          this.load();
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
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

}
