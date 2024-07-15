import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Titulos } from '../../model/titulos';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Titulos[] = [];
  modal: boolean = false;
  selected: Titulos | null = null;
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
      titulosOptenidos:new FormControl('', [Validators.required]),
      institucion:new FormControl('', [Validators.required]),
      anoDelTitulo:new FormControl('', [Validators.required]),
      intruccionFormal:new FormControl('', [Validators.required]),
      numeroDeRegistroSenesyt:new FormControl('', [Validators.required]),
    });
  }

  obtenerFecha(fechaISO: any): string {
    const indiceT = fechaISO.indexOf('T');
    if (indiceT !== -1) {
        return fechaISO.substring(0, indiceT);
    } else {
        return fechaISO;
    }
}

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Titulos[]) => {
        this.list = data;
        this.loadingSpiner = false;
      },
      error: error => {
        this.message = `Error: ${error.message}`;
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Titulos) {
    this.selected = registro;
    this.form.setValue({
      id: registro.id,
      titulosOptenidos:registro.titulosOptenidos,
      institucion:registro.institucion,
      anoDelTitulo:this.obtenerFecha(registro.anoDelTitulo),
      intruccionFormal:registro.intruccionFormal,
      numeroDeRegistroSenesyt:registro.numeroDeRegistroSenesyt,
    });
    this.modal = true;
  }

  save() {
    if (this.form.invalid) {
      this.message = 'Verificar los Datos a Ingresar';
      return;
    }

    const registro: Titulos = this.form.value;

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
