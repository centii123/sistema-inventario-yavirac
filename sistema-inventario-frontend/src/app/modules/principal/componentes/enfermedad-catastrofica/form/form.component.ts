import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { EnfermdadCatastrofica } from '../../model/enfermedad-catastrofica';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: EnfermdadCatastrofica[] = [];
  modal: boolean = false;
  selected: EnfermdadCatastrofica | null = null;
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
      descripcion: new FormControl('', [Validators.required])
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: EnfermdadCatastrofica[]) => {
        this.list = data;
        this.loadingSpiner = false;
      },
      error: error => {
        this.message = `Error: ${error.message}`;
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: EnfermdadCatastrofica) {
    this.selected = registro;
    this.form.setValue({
      id: registro.id,
      cargo_discapacidad: registro.cargo_discapacidad,
      certificado_enfermedad: registro.certificado_enfermedad,
      tipo_enfermedad: registro.tipo_enfermedad
    });
    this.modal = true;
  }

  save() {
    if (this.form.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const registro: EnfermdadCatastrofica = this.form.value;

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