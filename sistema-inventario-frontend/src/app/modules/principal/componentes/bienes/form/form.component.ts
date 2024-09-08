import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { BienesService } from '../../service/bienes.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Bienes } from '../../model/bienes';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

interface formSelectData {
  categoria: any[],
  infraestructura: any[]
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
  infraestructuraName: SafeHtml = '';
  EstadoOptions: any[] = [
    { label: 'Nuevo', value: 1 },
    { label: 'Usado', value: 2 },
    { label: 'Dañado', value: 3 },
    { label: 'Reparado', value: 4 },
    { label: 'Mantenimiento', value: 5 },
    { label: 'Dado de baja', value: 6 }
  ];
  formSelectData: formSelectData = {
    categoria: [],
    infraestructura: []
  };
  infraestructuraId?: any;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private bienesService: BienesService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.form = this.initForm();
    this.form.get('valor')?.valueChanges.subscribe(valor => {
      const iva = this.calculateIVA(valor); // Implementa la lógica de cálculo de IVA
      this.form.get('valorIva')?.setValue(iva);
    });
  }

  calculateIVA(valor: number): number {
    return valor * 1.15;
  }

  ngOnInit(): void {
    this.load();
    this.route.queryParams.subscribe(params => {
      const id = params['infraestructura'];
      this.infraestructuraId = id ? +id : null;
      if (params['infraestructura']) {
        this.load(id)
      } else {
        this.infraestructuraName = 'Todos los bienes';
        this.load()
      }
    });
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
      valorIva: new FormControl(''),
      serie: new FormControl('', [Validators.required]),
      categoriaBien: new FormControl('', [Validators.required]),
      infraestructura: new FormControl(null)
    });
  }

  load(id = null) {
    this.loadingSpiner = true;
    if (id == null) {
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
    } else {
      this.bienesService.getBienesByInfraestructuraId(id).subscribe(
        (data) => {
          this.list = data;
          this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());
          if (data.length > 0 && data[0].infraestructura) {
            let persona = data[0].infraestructura.persona?.nombres ? data[0].infraestructura.persona.nombres : "sin custodio"
            this.infraestructuraName = this.sanitizer.bypassSecurityTrustHtml(
              'Bienes de la Infraestructura: ' + data[0].infraestructura.nombre +
              '<div style="text-align: left;">Custodio: ' + persona + '</div>'
            );
            console.log(this.infraestructuraName);
          } else {
            this.infraestructuraName = 'Nombre de infraestructura no disponible';
          }
          this.loadingSpiner = false;
        },
        (error) => {
          console.error('Error al obtener bienes:', error);
          this.loadingSpiner = false;
        }
      )
    }


  }

  setSeleccionado(registro: Bienes) {
    this.selected = registro;
    this.openModal();
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
      infraestructura: registro.infraestructura ? registro.infraestructura.id : null
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const registro: Bienes = this.form.value;
    registro.categoriaBien = {
      'id': registro.categoriaBien.id
    };
    console.log('Registro a guardar:', registro);
    if (typeof registro.infraestructura === 'number') {
      registro.infraestructura = {
        id: registro.infraestructura
      };
    } else {
      registro.infraestructura = null;
    }

    if (registro.id) {
      this.crudService.update(registro).subscribe({
        next: () => {
          this.resetForm();
          this.load(this.infraestructuraId);
          this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Registro actualizado exitosamente!' });
        },
        error: error => {
          console.error('Error al actualizar:', error);
        }
      });
    } else {
      this.crudService.add(registro).subscribe({
        next: () => {
          this.resetForm();
          this.load(this.infraestructuraId);
          this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
        },
        error: error => {
          console.error('Error al agregar:', error);
        }
      });
    }

    this.modal = false;
  }

  resetForm() {
    this.form.reset();
    this.selected = null;
    this.form.get('infraestructura')?.setValue(this.infraestructuraId ?? 'null');
  }

  cancel() {
    this.resetForm();
    this.modal = false;
  }

  openModal() {
    this.loadingSpinerForm = true;
    this.resetForm();

    this.crudService.getAll('categorias-bienes/').subscribe(
      e => {
        this.formSelectData.categoria = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error('Error al cargar categorías:', error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('infraestructura/').subscribe(
      e => {
        this.formSelectData.infraestructura = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error('Error al cargar infraestructuras:', error);
        this.loadingSpinerForm = false;
      }
    );
    this.modal = true;
  }

  closeModal() {
    this.resetForm();
    this.modal = false;
  }
}
