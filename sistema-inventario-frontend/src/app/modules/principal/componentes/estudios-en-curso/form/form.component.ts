import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { EstudiosEnCurso } from '../../model/estudios-en-curso';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: EstudiosEnCurso[] = [];
  modal: boolean = false;
  selected: EstudiosEnCurso | null = null;
  message: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService
  ) {
    this.form = this.initForm();
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
      tipoDeTitulo: new FormControl('', [Validators.required]),
      fechaDeInicio: new FormControl('', [Validators.required]),
      fechaDeFin: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      numeroDeHoras: new FormControl('', [Validators.required])
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: EstudiosEnCurso[]) => {
        this.list = data;
        this.loadingSpiner = false;
      },
      error: error => {
        this.message = `Error: ${error.message}`;
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: EstudiosEnCurso) {
    this.selected = registro;
    this.form.setValue({
      id: registro.id,
      tipoDeTitulo: registro.tipoDeTitulo,
      fechaDeInicio: registro.fechaDeInicio,
      fechaDeFin: registro.fechaDeFin,
      nombre: registro.nombre,
      numeroDeHoras: registro.numeroDeHoras
    });
    this.modal = true;
  }

  save() {
    if (this.form.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const registro: EstudiosEnCurso = this.form.value;

    if (registro.id) {
      this.crudService.update(registro).subscribe({
        next: () => {
          this.message = 'Estudios en curso actualizada correctamente';
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
          this.message = 'Estudios en curso creada correctamente';
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
        this.message = 'Estudios en curso eliminada correctamente';
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
