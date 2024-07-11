import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Nacionalidad } from '../../model/nacionalidad';
import { NacionalidadService } from '../../service/nacionalidad.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formNacionalidad: FormGroup;
  listNacionalidad: Nacionalidad[] = [];
  modal: boolean = false;
  loading: boolean = false;
  selectedNacionalidad: Nacionalidad | null = null;
  message: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private nacionalidadService: NacionalidadService
  ) {
    this.formNacionalidad = this.initForm();
  }

  ngOnInit(): void {
    this.loadNacionalidades();
  }

  get f() {
    return this.formNacionalidad.controls;
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl(null),
      nombre: new FormControl('', [Validators.required])
    });
  }

  loadNacionalidades() {
    this.loading = true;
    this.nacionalidadService.getNacionalidades().subscribe({
      next: (data: Nacionalidad[]) => {
        this.listNacionalidad = data;
        this.loading = false;
      },
      error: error => {
        this.message = `Error: ${error.message}`;
        this.loading = false;
      }
    });
  }

  setSeleccionado(nacionalidad: Nacionalidad) {
    this.selectedNacionalidad = nacionalidad;
    this.formNacionalidad.setValue({
      id: nacionalidad.id,
      nombre: nacionalidad.nombre
    });
    this.modal = true;
  }

  saveNacionalidad() {
    if (this.formNacionalidad.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const nacionalidad: Nacionalidad = this.formNacionalidad.value;

    if (nacionalidad.id) {

      this.nacionalidadService.updateNacionalidad(nacionalidad).subscribe({
        next: () => {
          this.message = 'Nacionalidad actualizada correctamente';
          this.resetForm();
          this.loadNacionalidades();
        },
        error: error => {
          this.message = `Error: ${error.message}`;
        }
      });
    } else {
  
      this.nacionalidadService.addNacionalidad(nacionalidad).subscribe({
        next: () => {
          this.message = 'Nacionalidad creada correctamente';
          this.resetForm();
          this.loadNacionalidades();
        },
        error: error => {
          this.message = `Error: ${error.message}`;
        }
      });
    }

    this.modal = false;
  }

  deleteNacionalidad(id: number) {
    this.nacionalidadService.deleteNacionalidad(id).subscribe({
      next: () => {
        this.message = 'Nacionalidad eliminada correctamente';
        this.loadNacionalidades();
      },
      error: error => {
        this.message = `Error: ${error.message}`;
      }
    });
  }

  resetForm() {
    this.formNacionalidad.reset();
    this.selectedNacionalidad = null;
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
