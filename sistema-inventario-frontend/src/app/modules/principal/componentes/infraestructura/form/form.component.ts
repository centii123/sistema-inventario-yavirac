import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Infraestructura } from '../../model/infraestructura';
import { MessageService } from 'primeng/api';
import { Persona } from '../../model/persona';
import { ActivatedRoute } from '@angular/router';

interface formSelectData {
  persona: Persona[],
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})

export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  list: Infraestructura[] = [];
  modal: boolean = false;
  selected: Infraestructura | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  personaSelect:Persona[]=[]
  formSelectData: formSelectData = {
    persona: []
  };
  CategoriaOptions: any[] = [
    { label: 'Aula', value: 1 },
    { label: 'Laboratotio', value: 2 },
    { label: 'Oficina', value: 3 },
    { label: 'Talleres', value: 4 }
  ];

  categoriaUrl?:number | null;
  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.load();
    this.route.queryParams.subscribe(params => {
      this.categoriaUrl = +params['categoria'];
    });
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
      categoriaAula: new FormControl(1, [Validators.required])
    });
  }

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Infraestructura[]) => {
        this.list = data;
        console.log(data)
        this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());
        this.loadingSpiner = false;
      },

      error: error => {
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Infraestructura) {
    this.selected = registro;
    this.personaSelect?.unshift(registro.persona);
    this.openModal()
    this.form.setValue({
      id: registro.id,
      nombre: registro.nombre,
      descripcion: registro.descripcion,
      categoriaAula:registro.categoriaAula,
      persona: registro.persona ? registro.persona : null,
    });

  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const registro: Infraestructura = this.form.value;
    if(registro.persona){
      registro.persona={
        'id':registro.persona.id
      }
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
    this.form.get('categoriaAula')?.setValue(this.categoriaUrl ?? 'null');
  }

  cancel() {
    this.resetForm();
    this.modal = false;
    this.personaSelect=[];
  }

  openModal() {
    this.loadingSpinerForm = true
    this.resetForm();
    this.crudService.getAll('persona/').subscribe(
      (e:Persona[]) => {
        this.formSelectData.persona = e
        this.formSelectData.persona = e.filter((n:Persona) => n.infraestructura == null)
        const filteredPersonaSelect = this.personaSelect.filter(item => item !== null);
        this.formSelectData.persona=[...filteredPersonaSelect, ...this.formSelectData.persona]
        this.loadingSpinerForm = false
      },
      error => {
        console.error(error)
        this.loadingSpinerForm = false
      }
    ),

    // this.crudService.getAll('categorias-aulas/').subscribe(
    //   e=>{
    //     this.formSelectData.categoria=e
    //     this.loadingSpinerForm=false
    //   },
    //   error=>{
    //     console.error(error)
    //     this.loadingSpinerForm=false
    //   }
    // )

    this.modal = true;
  }

  closeModal() {
    this.resetForm();
    this.modal = false;
    this.personaSelect=[];
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
