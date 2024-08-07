import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Institutos } from '../../model/instituto';
import { MessageService } from 'primeng/api';
import { ProvinciasPipe } from 'src/app/core/pipes/provincias.pipe';

interface Provincia {
  id: number;
  descripcion: string;
  [key: string]: any;
}

interface formSelectData {
  provincia: any[],
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})

export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Institutos[] = [];
  modal: boolean = false;
  selected: Institutos | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  formSelectData: formSelectData = {
    provincia: [],

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
      coordinacionZonal: new FormControl('', [Validators.required]),
      canton: new FormControl('', [Validators.required]),
      direccionInstituto: new FormControl('', [Validators.required]),
      regimenLaboral: new FormControl('', [Validators.required]),
      provincias: new FormControl('', [Validators.required]),

    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Institutos[]) => {
        this.list = data;
        this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());

        this.loadingSpiner = false;
      },

      error: error => {
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Institutos) {
    this.selected = registro;
    this.openModal()
    this.form.setValue({
      id: registro.id,
      nombre: registro.nombre,
      coordinacionZonal: registro.coordinacionZonal,
      canton: registro.canton,
      direccionInstituto: registro.direccionInstituto,
      regimenLaboral: registro.regimenLaboral,
      provincias: registro.provincias,
    });

  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const registro: Institutos = this.form.value;
    registro.provincias = {
      'id': registro.provincias.id
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
    this.loadingSpinerForm = true
    this.resetForm();
    this.crudService.getAll('provincias/').subscribe(
      e => {
        this.formSelectData.provincia = e
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

}
// obtencionTitulo: this.obtenerFecha(registro.obtencionTitulo),