import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Aulas } from '../../model/aula';
import { MessageService } from 'primeng/api';

interface formSelectData {
  persona: any[],
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})

export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Aulas[] = [];
  modal: boolean = false;
  selected: Aulas | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  formSelectData: formSelectData = {
    persona: [],

  };

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private messageService: MessageService
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
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      persona: new FormControl(null),
      //categoriaAula: new FormControl(1, [Validators.required])
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Aulas[]) => {
        this.list = data;
        this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());
        this.loadingSpiner = false;
      },

      error: error => {
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Aulas) {
    this.selected = registro;
    this.openModal()
    this.form.setValue({
      id: registro.id,
      nombre: registro.nombre,
      descripcion: registro.descripcion,
      //categoriaAula:registro.categoriaAula,
      persona: registro.persona,
    });

  }

  save() {
    console.log(this.form.value)
    if (this.form.invalid) {
      return;
    }

    const registro: Aulas = this.form.value;
    /*registro.persona={
      'id':registro.persona.id
    }*/
    console.log(this.form.value)

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
    this.loadingSpinerForm = true
    this.resetForm();
    this.crudService.getAll('persona/').subscribe(
      e => {
        this.formSelectData.persona = e
        this.loadingSpinerForm = false
      },
      error => {
        console.error(error)
        this.loadingSpinerForm = false
      }
    )

    this.modal = true;
  }

  closeModal() {
    this.resetForm();
    this.modal = false;
  }

  get selectedCustodio() {
    return this.form.get('persona')?.value;
  }

  getOptionLabel(data: any): string {
    return `${data.dni} - ${data.nombres}`;
  }

  obtenerFecha(fechaISO: any): string {
    const indiceT = fechaISO.indexOf('T');
    if (indiceT !== -1) {
      return fechaISO.substring(0, indiceT);
    } else {
      return fechaISO;
    }
  }

}
