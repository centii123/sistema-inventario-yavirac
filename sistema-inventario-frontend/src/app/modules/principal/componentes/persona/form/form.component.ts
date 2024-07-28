import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { MessageService } from 'primeng/api';
import { Discapacidad, EnfermedadCatastrofica, EntidadPublica, FechaIngresoInstituto, Persona, User } from '../../model/persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  loadingSpiner!: boolean;
  form: FormGroup;
  /*discapacidadForm: FormGroup;
  enfermedadForm: FormGroup;
  entidadPublicaForm: FormGroup;
  fechaIngresoForm: FormGroup;
  userForm: FormGroup;
  personaForm: FormGroup;*/
  list: Persona[] = [];
  modal: boolean = false;
  selected: Persona | null = null;
  dataDrop!: any[];
  loadingSpinerForm!: boolean;
  formSelectDataEscalaOcupacionales!: any[];
  formSelectDataEstadoCivil!: any[];
  formSelectDataEstudiosenCursos!: any[];
  formSelectDataGenero!: any[];
  formSelectDataInstitutos!: any[];
  formSelectDataNacionalidad!: any[];
  formSelectDataCarreras!: any[];
  formSelectDataProvincia!: any[];
  formSelectDataRolesInstitucionales!: any[];
  modalidadJornadaOptions: any[] = [
    { label: 'Medio Tiempo', value: 0 },
    { label: 'Tiempo Completo', value: 1 }
  ];
  entidadPublicaOptions: any[] = [
    { label: 'NO', value: 0 },
    { label: 'SI', value: 1 }
  ];
  honorarioSenecsytOptions: any[] = [
    { label: 'NO', value: 0 },
    { label: 'SI', value: 1 }
  ];
  familiarSenecsytOptions: any[] = [
    { label: 'NO', value: 0 },
    { label: 'SI', value: 1 }
  ];

  constructor(
    private fb: FormBuilder,
    private crudService: CrudService,
    private messageService: MessageService
  ) {
    this.form = this.initForm();
    /*this.discapacidadForm = this.initDiscapacidadForm();
    this.enfermedadForm = this.initEnfermedadForm();
    this.entidadPublicaForm = this.initEntidadPublicaForm();
    this.fechaIngresoForm = this.initFechaIngresoForm();
    this.userForm = this.initUserForm();
    this.personaForm = this.initPersonaForm();*/
  }

  ngOnInit(): void {
    this.load();
  }

  get f() {
    return this.form.controls;
  }

  initForm(): FormGroup {
    return this.fb.group({

      discapacidadForm: this.fb.group({
        id: new FormControl(null),
        numeroCarnet: ['', Validators.required],
        porcentaje: [0, Validators.required],
        tipoDiscapacidad: ['', Validators.required]
      }),
      enfermedadForm: this.fb.group({
        id: new FormControl(null),
        cargoDiscapacidad: ['', Validators.required],
        certificadoEnfermedad: ['', Validators.required],
        tipoEnfermedad: ['', Validators.required]
      }),
      entidadPublicaForm: this.fb.group({
        id: new FormControl(null),
        entidadPublica: ['', Validators.required],
        honorarioSenecsyt: ['', Validators.required],
        familiarSenecsyt: ['', Validators.required],
        nombreFamiliar: ['', Validators.required],
        observaciones: ['', Validators.required],
        codigoInstituto: ['', Validators.required]
      }),
      fechaIngresoForm: this.fb.group({
        id: new FormControl(null),
        cambioOcupacionalEmergencia: ['', Validators.required],
        primerIngreso: ['', Validators.required],
        cambioGrupoOcupacionalModalidad: ['', Validators.required],
        cambioInstitutoFusion: ['', Validators.required]
      }),
      userForm: this.fb.group({
        id: new FormControl(null),
        username: ['', Validators.required],
        password: ['', Validators.required]
      }),
      personaForm: this.fb.group({
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
        direccionDomiciliaria: new FormControl('', [Validators.required]),
        modalidadLaboral: new FormControl('', [Validators.required]),
        modalidadJornada: new FormControl('', [Validators.required]),
        horarioTrabajo: new FormControl('', [Validators.required]),
        materiasImparte: new FormControl('', [Validators.required]),
        rmu: new FormControl('', [Validators.required]),
        //muchos a uno
        escalaOcupacionales: new FormControl('', [Validators.required]),
        estadoCivil: new FormControl('', [Validators.required]),
        estudiosenCursos: new FormControl('', [Validators.required]),
        genero: new FormControl('', [Validators.required]),
        institutos: new FormControl('', [Validators.required]),
        nacionalidad: new FormControl('', [Validators.required]),
        carreras: new FormControl('', [Validators.required]),
        provincia: new FormControl('', [Validators.required]),
        rolesInstitucionales: new FormControl('', [Validators.required]),
      })

    });
  }
/*
  initDiscapacidadForm(): FormGroup {
    return this.fb.group({
      numeroCarnet: new FormControl('', [Validators.required]),
      porcentaje: new FormControl('', [Validators.required]),
      tipoDiscapacidad: new FormControl('', [Validators.required])
    });
  }

  initEnfermedadForm(): FormGroup {
    return this.fb.group({
      cargoDiscapacidad: new FormControl('', [Validators.required]),
      certificadoEnfermedad: new FormControl('', [Validators.required]),
      tipoEnfermedad: new FormControl('', [Validators.required])
    });
  }

  initEntidadPublicaForm(): FormGroup {
    return this.fb.group({
      entidadPublica: new FormControl('', [Validators.required]),
      honorarioSenecsyt: new FormControl('', [Validators.required]),
      familiarSenecsyt: new FormControl('', [Validators.required]),
      nombreFamiliar: new FormControl('', [Validators.required]),
      observaciones: new FormControl('', [Validators.required]),
      codigoInstituto: new FormControl('', [Validators.required]),
    });
  }

  initFechaIngresoForm(): FormGroup {
    return this.fb.group({
      cambioGrupoOcupacionalModalidad: new FormControl('', [Validators.required]),
      cambioInstitutoFusion: new FormControl('', [Validators.required]),
      cambioOcupacionalEmergencia: new FormControl('', [Validators.required]),
      primerIngreso: new FormControl('', [Validators.required])
    });
  }

  initUserForm(): FormGroup {
    return this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  initPersonaForm(): FormGroup {
    return this.fb.group({
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
        direccionDomiciliaria: new FormControl('', [Validators.required]),
        modalidadLaboral: new FormControl('', [Validators.required]),
        modalidadJornada: new FormControl('', [Validators.required]),
        horarioTrabajo: new FormControl('', [Validators.required]),
        materiasImparte: new FormControl('', [Validators.required]),
        rmu: new FormControl('', [Validators.required]),
        //muchos a uno
        escalaOcupacionales: new FormControl('', [Validators.required]),
        estadoCivil: new FormControl('', [Validators.required]),
        estudiosenCursos: new FormControl('', [Validators.required]),
        genero: new FormControl('', [Validators.required]),
        institutos: new FormControl('', [Validators.required]),
        nacionalidad: new FormControl('', [Validators.required]),
        carreras: new FormControl('', [Validators.required]),
        provincia: new FormControl('', [Validators.required]),
        rolesInstitucionales: new FormControl('', [Validators.required]),
    })
  }*/

  load() {
    this.loadingSpiner = true;
    this.crudService.getAll().subscribe({
      next: (data: Persona[]) => {
        console.log(data)
        this.list = data;
        this.list.sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime());
        this.loadingSpiner = false;
      },
      error: error => {
        this.loadingSpiner = false;
      }
    });
  }

  setSeleccionado(registro: Persona) {
    
    this.selected = registro;
    this.openModal();
    console.log('Registro seleccionado:', registro);
    this.form.patchValue({
      id: registro.id,
      nombres: registro.nombres,
      apellidos: registro.apellidos,
      etnia: registro.etnia,
      fechaDeNacimiento: registro.fechaDeNacimiento,
      dni: registro.dni,
      telefono: parseInt(registro.telefono),
      telefonoDomicilio: parseInt(registro.telefonoDomicilio),
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

    /*this.discapacidadForm.patchValue(registro.discapacidad);
    this.enfermedadForm.patchValue(registro.enfermedadCatastrofica);
    this.entidadPublicaForm.patchValue(registro.entidadPublica);
    this.fechaIngresoForm.patchValue(registro.fechaIngresoInstituto);
    this.userForm.patchValue(registro.user);*/
  }

  save() {
    console.log('la data es:', this.form);

    const personaForm:any = this.form.value.personaForm;
    const discapacidad: Discapacidad = this.form.value.discapacidadForm;
    const enfermedadCatastrofica: EnfermedadCatastrofica = this.form.value.enfermedadForm;
    const entidadPublicaFormValue = this.form.value.entidadPublicaForm;

    // Compruebe si los campos están definidos y luego asigne los valores.
    const entidadPublica: EntidadPublica = {
      ...entidadPublicaFormValue,
      entidadPublica: entidadPublicaFormValue.entidadPublica?.value || entidadPublicaFormValue.entidadPublica,
      honorarioSenecsyt: entidadPublicaFormValue.honorarioSenecsyt?.value || entidadPublicaFormValue.honorarioSenecsyt,
      familiarSenecsyt: entidadPublicaFormValue.familiarSenecsyt?.value || entidadPublicaFormValue.familiarSenecsyt,
    };

    const fechaIngresoInstituto: FechaIngresoInstituto = this.form.value.fechaIngresoForm;
    const user: User = this.form.value.userForm;

    this.crudService.add(discapacidad, 'discapacidad/').subscribe({
      next: (respDiscapacidad) => {
        console.log('Discapacidad saved:', respDiscapacidad.id);
        discapacidad.id = respDiscapacidad.id;

        this.crudService.add(enfermedadCatastrofica, 'enfermedadCatastrofica/').subscribe({
          next: (respEnfermedad) => {

            enfermedadCatastrofica.id = respEnfermedad.id;
            console.log('Enfermedad saved:', enfermedadCatastrofica);

            this.crudService.add(entidadPublica, 'entidadPublica/').subscribe({
              next: (respEntidad) => {
                console.log('Entidad Publica saved:', respEntidad.id);
                entidadPublica.id = respEntidad.id;

                this.crudService.add(fechaIngresoInstituto, 'fecha-ingreso-instituto/').subscribe({
                  next: (respFechaIngreso) => {
                    console.log('Fecha Ingreso saved:', respFechaIngreso.id);
                    fechaIngresoInstituto.id = respFechaIngreso.id;

                    this.crudService.add(user, 'api/user/').subscribe({
                      next: (respUser) => {
                        console.log('User saved:', respUser.id);
                        user.id = respUser.id;

                        // Verifica que todas las entidades relacionadas tienen un ID antes de crear la Persona
                        console.log('discapacidad:', discapacidad);
                        console.log('enfermedadCatastrofica:', enfermedadCatastrofica);
                        console.log('entidadPublica:', entidadPublica);
                        console.log('fechaIngresoInstituto:', fechaIngresoInstituto);
                        console.log('user:', user);
                        console.log('esto tiene persona:', this.form.value)
                        const persona: any = {
                          ...personaForm,
                          discapacidad: { id: discapacidad.id },
                          enfermedadCatastrofica: { id: enfermedadCatastrofica.id },
                          entidadPublica: { id: entidadPublica.id },
                          fechaIngresoInstituto: { id: fechaIngresoInstituto.id },
                          user: { id: user.id },
                          escalaOcupacionales: { id: personaForm.escalaOcupacionales.id },
                          estadoCivil: { id: personaForm.estadoCivil.id },
                          estudiosenCursos: { id: personaForm.estudiosenCursos.id },
                          genero: { id: personaForm.genero.id },
                          institutos: { id: personaForm.institutos.id },
                          nacionalidad: { id: personaForm.nacionalidad.id },
                          carreras: { id: personaForm.carreras.id },
                          provincia: { id: personaForm.provincia.id },
                          rolesInstitucionales: { id: personaForm.rolesInstitucionales.id },


                        };
                        persona.modalidadJornada=persona.modalidadJornada.value
                        persona.telefono=String(persona.telefono)
                        persona.telefonoDomicilio=String(persona.telefonoDomicilio)

                        console.log('data a enviar', persona)

                        if (persona.id) {
                          console.log('Updating persona:', persona);
                          this.crudService.update(persona).subscribe({
                            next: () => {
                              console.log('Persona updated');
                              this.resetForm();
                              this.load();
                              this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Registro actualizado exitosamente!' });
                            },
                            error: error => {
                              console.error('Error updating persona:', error);
                            }
                          });
                        } else {
                          console.log('Adding persona:', persona);
                          this.crudService.add(persona).subscribe({
                            next: () => {
                              console.log('Persona added');
                              this.resetForm();
                              this.load();
                              this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
                            },
                            error: error => {
                              console.error('Error adding persona:', error);
                            }
                          });
                        }
                      },
                      error: error => {
                        console.error('Error saving user:', error);
                      }
                    });
                  },
                  error: error => {
                    console.error('Error saving fechaIngreso:', error);
                  }
                });
              },
              error: error => {
                console.error('Error saving entidadPublica:', error);
              }
            });
          },
          error: error => {
            console.error('Error saving enfermedadCatastrofica:', error);
          }
        });
      },
      error: error => {
        console.error('Error saving discapacidad:', error);
      }
    });

    this.modal = false;
  }





  resetForm() {
    this.form.reset();
    this.selected = null;
    /*this.discapacidadForm.reset();
    this.enfermedadForm.reset();
    this.entidadPublicaForm.reset();
    this.fechaIngresoForm.reset();
    this.userForm.reset();*/
  }

  cancel() {
    this.resetForm();
    this.modal = false;
  }

  openModal() {
    this.loadingSpinerForm = true;
    this.resetForm();
    this.loadDropdownData();
    this.modal = true;
  }

  loadDropdownData() {
    this.crudService.getAll('escala-ocupacional/').subscribe(
      e => {
        this.formSelectDataEscalaOcupacionales = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('estado-civil/').subscribe(
      e => {
        this.formSelectDataEstadoCivil = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('estudios-curso/').subscribe(
      e => {
        this.formSelectDataEstudiosenCursos = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('generos/').subscribe(
      e => {
        this.formSelectDataGenero = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('institutos/').subscribe(
      e => {
        this.formSelectDataInstitutos = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('nacionalidad/').subscribe(
      e => {
        this.formSelectDataNacionalidad = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('carreras/').subscribe(
      e => {
        this.formSelectDataCarreras = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('provincias/').subscribe(
      e => {
        this.formSelectDataProvincia = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
    this.crudService.getAll('roles-institucionales/').subscribe(
      e => {
        this.formSelectDataRolesInstitucionales = e;
        this.loadingSpinerForm = false;
      },
      error => {
        console.error(error);
        this.loadingSpinerForm = false;
      }
    );
  }

  closeModal() {
    this.resetForm();
    this.modal = false;
  }
}
