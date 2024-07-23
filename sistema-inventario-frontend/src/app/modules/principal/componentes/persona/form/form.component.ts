import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { MessageService } from 'primeng/api';
import { Aula, Discapacidad, EnfermedadCatastrofica, EntidadPublica, FechaIngresoInstituto, Persona, User } from '../../model/persona';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  discapacidadForm: FormGroup;
  enfermedadForm: FormGroup;
  entidadPublicaForm: FormGroup;
  fechaIngresoForm: FormGroup;
  aulaForm: FormGroup;
  userForm: FormGroup;
  list: Persona[] = [];
  modal: boolean = false;
  selected: Persona | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  formSelectDataEscalaOcupacionales!:any[];
  formSelectDataEstadoCivil!:any[];
  formSelectDataEstudiosenCursos!:any[];
  formSelectDataGenero!:any[];
  formSelectDataInstitutos!:any[];
  formSelectDataNacionalidad!:any[];
  formSelectDataCarreras!:any[];
  formSelectDataProvincia!:any[];
  formSelectDataRolesInstitucionales!:any[];
  modalidadJornadaOptions: any[] = [
    { label: 'Medio Tiempo', value: 0 },
    { label: 'Tiempo Completo', value: 1 }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService,
    private messageService: MessageService
  ) {
    this.form= this.initForm();
    this.discapacidadForm = this.initDiscapacidadForm();
    this.enfermedadForm = this.initEnfermedadForm();
    this.entidadPublicaForm = this.initEntidadPublicaForm();
    this.fechaIngresoForm = this.initFechaIngresoForm();
    this.aulaForm = this.initAulaForm();
    this.userForm = this.initUserForm();
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
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      etnia: new FormControl('', [Validators.required]),
      fechaDeNacimiento: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      telefonoDomicilio: new FormControl('', [Validators.required]),
      correoPersonal: new FormControl('', [Validators.required]),
      tipoDeSangre: new FormControl('', [Validators.required]),
      direccionDomiciliaria:new FormControl('', [Validators.required]),
      modalidadLaboral:new FormControl('', [Validators.required]),
      modalidadJornada:new FormControl('', [Validators.required]),
      horarioTrabajo:new FormControl('', [Validators.required]),
      materiasImparte:new FormControl('', [Validators.required]),
      rmu:new FormControl('', [Validators.required]),
      escalaOcupacionales:new FormControl('', [Validators.required]),
      estadoCivil:new FormControl('', [Validators.required]),
      estudiosenCursos:new FormControl('', [Validators.required]),
      genero:new FormControl('', [Validators.required]),
      institutos:new FormControl('', [Validators.required]),
      nacionalidad:new FormControl('', [Validators.required]),
      carreras:new FormControl('', [Validators.required]),
      provincia:new FormControl('', [Validators.required]),
      rolesInstitucionales:new FormControl('', [Validators.required]),
    });
  }


  initDiscapacidadForm(): FormGroup {
    return this.formBuilder.group({
      numeroCarnet: new FormControl('', [Validators.required]),
      porcentaje: new FormControl('', [Validators.required]),
      tipoDiscapacidad: new FormControl('', [Validators.required])
    });
  }

  initEnfermedadForm(): FormGroup {
    return this.formBuilder.group({
      certificadoEnfermedad: new FormControl('', [Validators.required]),
      tipoEnfermedad: new FormControl('', [Validators.required])
    });
  }

  initEntidadPublicaForm(): FormGroup {
    return this.formBuilder.group({
      nombre: new FormControl('', [Validators.required])
    });
  }

  initFechaIngresoForm(): FormGroup {
    return this.formBuilder.group({
      cambioGrupoOcupacionalModalidad: new FormControl('', [Validators.required]),
      cambioInstitutoFusion: new FormControl('', [Validators.required]),
      cambioOcupacionalEmergencia: new FormControl('', [Validators.required]),
      primerIngreso: new FormControl('', [Validators.required])
    });
  }

  initAulaForm(): FormGroup {
    return this.formBuilder.group({
      nombre: new FormControl('', [Validators.required])
    });
  }

  initUserForm(): FormGroup {
    return this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Persona[]) => {
        this.list = data;
        this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());
        this.list.forEach((e,index) => {
         
        });
        
        this.loadingSpiner = false;

      },
      
      error: error => {
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Persona) {
    this.selected = registro;
    this.openModal()
    this.form.setValue({
      id: registro.id,
      nombres: registro.nombres,
      apellidos: registro.apellidos,
      etnia: registro.etnia,
      fechaDeNacimiento: registro.fechaDeNacimiento,
      dni: registro.dni,
      telefono: registro.telefono,
      telefonoDomicilio: registro.telefonoDomicilio,
      correoPersonal: registro.correoPersonal,
      tipoDeSangre: registro.tipoDeSangre,
      direccionDomiciliaria: registro.direccionDomiciliaria,
      modalidadLaboral: registro.modalidadLaboral,
      modalidadJornada: registro.modalidadJornada,
      horarioTrabajo: registro.horarioTrabajo,
      materiasImparte: registro.materiasImparte,
      rmu: registro.rmu,
      escalaOcupacionales: registro.escalaOcupacionales,
      estadoCivil: registro.estadoCivil,
      estudiosenCursos: registro.estudiosenCursos,
      genero: registro.genero,
      institutos: registro.institutos,
      nacionalidad: registro.nacionalidad,
      carreras: registro.carreras,
      provincia: registro.provincia,
      rolesInstitucionales: registro.rolesInstitucionales,
    });
    
  }

  save() {
    if (this.form.invalid || this.discapacidadForm.invalid || this.enfermedadForm.invalid || this.entidadPublicaForm.invalid || this.fechaIngresoForm.invalid || this.aulaForm.invalid || this.userForm.invalid) {
      return;
    }
  
    const discapacidad: Discapacidad = this.discapacidadForm.value;
    const enfermedadCatastrofica: EnfermedadCatastrofica = this.enfermedadForm.value;
    const entidadPublica: EntidadPublica = this.entidadPublicaForm.value;
    const fechaIngresoInstituto: FechaIngresoInstituto = this.fechaIngresoForm.value;
    const aula: Aula = this.aulaForm.value;
    const user: User = this.userForm.value;
  
    this.crudService.add(discapacidad, 'discapacidad/').subscribe({
      next: (respDiscapacidad) => {
        this.crudService.add(enfermedadCatastrofica, 'enfermedadCatastrofica/').subscribe({
          next: (respEnfermedad) => {
            this.crudService.add(entidadPublica, 'entidadPublica/').subscribe({
              next: (respEntidad) => {
                this.crudService.add(fechaIngresoInstituto, 'fechaIngresoInstituto/').subscribe({
                  next: (respFechaIngreso) => {
                    this.crudService.add(aula, 'aula/').subscribe({
                      next: (respAula) => {
                        this.crudService.add(user, 'user/').subscribe({
                          next: (respUser) => {
                            const persona: Persona = this.form.value;
                            
                            //ids recien creados XD
                            persona.discapacidad = { ...discapacidad, id: respDiscapacidad.id };
                            persona.enfermedadCatastrofica = { ...enfermedadCatastrofica, id: respEnfermedad.id };
                            persona.entidadPublica = { ...entidadPublica, id: respEntidad.id };
                            persona.fechaIngresoInstituto = { ...fechaIngresoInstituto, id: respFechaIngreso.id };
                            persona.aula = { ...aula, id: respAula.id };
                            persona.user = { ...user, id: respUser.id };
  
                            // FK
                            persona.escalaOcupacionales = { id: persona.escalaOcupacionales.id };
                            persona.estadoCivil = { id: persona.estadoCivil.id };
                            persona.estudiosenCursos = { id: persona.estudiosenCursos.id };
                            persona.genero = { id: persona.genero.id };
                            persona.institutos = { id: persona.institutos.id };
                            persona.nacionalidad = { id: persona.nacionalidad.id };
                            persona.carreras = { id: persona.carreras.id };
                            persona.provincia = { id: persona.provincia.id };
                            persona.rolesInstitucionales = { id: persona.rolesInstitucionales.id };
  
                            if (persona.id) {
                              this.crudService.update(persona).subscribe({
                                next: () => {
                                  this.resetForm();
                                  this.load();
                                  this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Registro actualizado exitosamente!' });
                                },
                                error: error => {
                                  // Manejar error
                                }
                              });
                            } else {
                              this.crudService.add(persona).subscribe({
                                next: () => {
                                  this.resetForm();
                                  this.load();
                                  this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
                                },
                                error: error => {
                                  // Manejar error
                                }
                              });
                            }
                          },
                          error: error => {
                            // Manejar error
                          }
                        });
                      },
                      error: error => {
                        // Manejar error
                      }
                    });
                  },
                  error: error => {
                    // Manejar error
                  }
                });
              },
              error: error => {
                // Manejar error
              }
            });
          },
          error: error => {
            // Manejar error
          }
        });
      },
      error: error => {
        // Manejar error
      }
    });
  
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
    this.loadingSpinerForm=true
    this.resetForm();
    this.crudService.getAll('escala-ocupacional/').subscribe(
      e=>{
        this.formSelectDataEscalaOcupacionales=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('estado-civil/').subscribe(
      e=>{
        this.formSelectDataEstadoCivil=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('estudios-curso/').subscribe(
      e=>{
        this.formSelectDataEstudiosenCursos=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('generos/').subscribe(
      e=>{
        this.formSelectDataGenero=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('institutos/').subscribe(
      e=>{
        this.formSelectDataInstitutos=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('nacionalidad/').subscribe(
      e=>{
        this.formSelectDataNacionalidad=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('carreras/').subscribe(
      e=>{
        this.formSelectDataCarreras=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('provincias/').subscribe(
      e=>{
        this.formSelectDataProvincia=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )
    this.crudService.getAll('roles-institucionales/').subscribe(
      e=>{
        this.formSelectDataRolesInstitucionales=e
        this.loadingSpinerForm=false
      },
      error=>{
        console.error(error)
        this.loadingSpinerForm=false
      }
    )


    //
    this.modal = true;
  }

  closeModal() {
    this.resetForm();
    this.modal = false;
  }


}
