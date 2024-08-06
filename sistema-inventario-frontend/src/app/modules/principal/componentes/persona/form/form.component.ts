import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { MessageService } from 'primeng/api';
import { Discapacidad, EnfermedadCatastrofica, EntidadPublica, FechaIngresoInstituto, Persona, User } from '../../model/persona';
import { affirmation, estadoCivil, genero, intruccionFormal, modalidadJornada, TipoDeSangre } from '../constants/constantes-persona';
import { provincias } from 'src/app/core/constants/constantes-globales';
import { obtenerFecha } from 'src/app/core/functions/obtenerFecha';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  FechaOptener = (fecha: any) => obtenerFecha(fecha)
  loadingSpiner!: boolean;
  form: FormGroup;
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
  formSelectData={
    tipoDeSangreOptions:TipoDeSangre,
    modalidadJornadaOptions : modalidadJornada,
    provinciasOptions:provincias,
    generoOptions:genero,
    estadoCivilOptions:estadoCivil,
    entidadPublicaOptions:affirmation,
    honorarioSenecsytOptions:affirmation,
    familiarSenecsytOptions:affirmation,
    cargoPersonaDiscapacidadOption:affirmation,
    intruccionFormalOption:intruccionFormal
  }

  tableForm:any={
    discapacidad:[],
    enfermedad_catastrofica:[],
    familiar_Labora_otra_Entidad_Publica:[],
    estudios_en_curso:[],
    titulos:[]
  }
  activeIndex: number = 0;

  temporalDataAdd!:any;

  constructor(
    private fb: FormBuilder,
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
    return this.fb.group({

      titulosForm:this.fb.group({
        id: new FormControl(null),
        titulosOptenidos: new FormControl(null),
        numeroDeRegistroSenesyt: new FormControl(null),
        intruccionFormal: new FormControl(null),
        institucion: new FormControl(null),
        anoDelTitulo: new FormControl(null),
      }),
      discapacidadForm: this.fb.group({
        id: new FormControl(null),
        numeroCarnet: new FormControl(null),
        porcentaje: [0],
        tipoDiscapacidad: new FormControl(null)
      }),
      estudiosenCursosForm:this.fb.group({
        id: new FormControl(null),
        nombre: new FormControl(null),
        tipoDeTitulo: new FormControl(null),
        numeroDeHoras: new FormControl(null),
        fechaDeInicio: new FormControl(null),
        fechaDeFin: new FormControl(null),
      }),
      enfermedadCatastroficaForm: this.fb.group({
        id: new FormControl(null),
        cargoPersonaDiscapacidad: new FormControl(null),
        institucionCertificaEnfermedad: new FormControl(null),
        tipoEnfermedad: new FormControl(null)
      }),
      entidadPublicaForm: this.fb.group({
        id: new FormControl(null),
        laboraOtraEntidadPublica: ['', Validators.required],
        recibeOtroHonorarioSenecsyt: ['', Validators.required],
        tienefamiliaresLaboraSenecsyt: ['', Validators.required],
        observaciones: ['', Validators.required],
        codigoInstitutoLabore: ['', Validators.required]
      }),
      fechaIngresoForm: this.fb.group({
        id: new FormControl(null),
        cambioOcupacionalEmergencia: ['', Validators.required],
        primerIngreso: ['', Validators.required],
        cambioGrupoOcupacionalModalidad: ['', Validators.required],
        cambioInstitutoFusion: ['', Validators.required]
      }),
      familiaresForm: this.fb.group({
        id: new FormControl(null),
        nombre: new FormControl(null),
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
        //muchos a uno
        escalaOcupacionales: new FormControl('', [Validators.required]),
        estadoCivil: new FormControl('', [Validators.required]),
        genero: new FormControl('', [Validators.required]),
        institutos: new FormControl('', [Validators.required]),
        nacionalidad: new FormControl('', [Validators.required]),
        carreras: new FormControl('', [Validators.required]),
        provincia: new FormControl('', [Validators.required]),
        rolesInstitucionales: new FormControl('', [Validators.required]),
      })

    });
  }

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
    this.tableForm.discapacidad=registro.discapacidad
    this.tableForm.enfermedad_catastrofica=registro.enfermedadCatastrofica
    this.tableForm.familiar_Labora_otra_Entidad_Publica=registro.familiarLaboraotraEntidadPublica
    this.tableForm.estudios_en_curso=registro.estudiosenCursos
    this.tableForm.titulos=registro.titulos

    this.form.patchValue({
      personaForm: {
        id: registro.id,
        nombres: registro.nombres,
        apellidos: registro.apellidos,
        etnia: registro.etnia,
        fechaDeNacimiento: this.FechaOptener(registro.fechaDeNacimiento),
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
        rolesInstitucionales: registro.rolesInstitucionales
      },
      discapacidadForm: registro.discapacidad,
      enfermedadForm: registro.enfermedadCatastrofica,
      entidadPublicaForm: registro.entidadPublica,
      fechaIngresoForm: {
        id:registro.fechaIngresoInstituto.id,
        primerIngreso:this.FechaOptener(registro.fechaIngresoInstituto.primerIngreso),
        cambioOcupacionalEmergencia:this.FechaOptener(registro.fechaIngresoInstituto.cambioOcupacionalEmergencia),
        cambioInstitutoFusion:this.FechaOptener(registro.fechaIngresoInstituto.cambioInstitutoFusion),
        cambioGrupoOcupacionalModalidad:this.FechaOptener(registro.fechaIngresoInstituto.cambioGrupoOcupacionalModalidad)
      },//registro.fechaIngresoInstituto,
      userForm: registro.user
    });

    console.log(this.form.value)
  }


  save() {

    /*
    1- fechaIngresoForm
    2- entidadPublicaForm
    3- userForm
    4-persona
    6 - discapacidadForm
    7- enfermedadCatastroficaForm
    8-familiaresForm
    9-estudiosenCursosForm
    10 -titulosForm
    */

    let data=this.form.value
    this.temporalDataAdd={
      fechaIngresoForm:null,
      entidadPublicaForm:null,
      userForm:null,
      personaForm:null
    }
    if(data.personaForm.id == null){
      data.userForm={
        username: data.personaForm.dni,
        password: data.personaForm.dni
      }
      this.crudService.add(data.userForm,'api/user/').subscribe({
        next:(int)=>{
          this.temporalDataAdd.userForm=int.id
          data.personaForm.user={
            id:this.temporalDataAdd.userForm
          }
        }
      })

    }else{
      data.personaForm.user={
        id:data.userForm.id
      }

      data.userForm={
        id:null,
        username: null,
        password: null
      }
    }
    
    data.personaForm.carreras={
      id:data.personaForm.carreras.id
    }

    data.personaForm.escalaOcupacionales={
      id:data.personaForm.escalaOcupacionales.id
    }

    data.personaForm.institutos={
      id:data.personaForm.institutos.id
    }

    data.personaForm.nacionalidad={
      id:data.personaForm.nacionalidad.id
    }

    data.personaForm.rolesInstitucionales={
      id:data.personaForm.rolesInstitucionales.id
    }

    
    data.discapacidadForm=this.tableForm.discapacidad
    data.enfermedadCatastroficaForm=this.tableForm.enfermedad_catastrofica
    data.familiaresForm=this.tableForm.familiar_Labora_otra_Entidad_Publica
    data.estudiosenCursosForm=this.tableForm.estudios_en_curso
    data.titulosForm=this.tableForm.titulos

    

    //rolesInstitucionales
    console.log('la data es:', data);

    this.crudService.add(data.fechaIngresoForm,'fecha-ingreso-instituto/').subscribe({
      next:(e)=>{
        this.temporalDataAdd.fechaIngresoForm=e.id
        this.crudService.add(data.entidadPublicaForm,'entidadPublica/').subscribe({
          next: (e)=>{
            this.temporalDataAdd.entidadPublicaForm=e.id
            console.log(data.userForm)
            this.temporalDataAdd.userForm=e.id
                data.personaForm.fechaIngresoInstituto={
                  id:this.temporalDataAdd.fechaIngresoForm
                }
                data.personaForm.entidadPublica={
                  id:this.temporalDataAdd.entidadPublicaForm
                }

                console.log(data.personaForm)
                
                this.crudService.add(data.personaForm).subscribe({
                  next:(e)=>{
                    this.temporalDataAdd.personaForm=e.id
                    data.enfermedadCatastroficaForm.forEach((iteracion:any) => {
                      iteracion.persona={
                        id:this.temporalDataAdd.personaForm
                      }

                      this.crudService.add(iteracion,'enfermedadCatastrofica/').subscribe({
                        next:este=>{
                          console.log(este)
                        },
                        error: error => {
                          console.error('Error:', error);
                        }
                      })
                    });

                    data.discapacidadForm.forEach((iteracion:any) => {
                      iteracion.persona={
                        id:this.temporalDataAdd.personaForm
                      }

                      this.crudService.add(iteracion,'discapacidad/').subscribe({
                        next:este=>{
                          console.log(este)
                        },
                        error: error => {
                          console.error('Error:', error);
                        }
                      })
                    });

                    data.estudiosenCursosForm.forEach((iteracion:any) => {
                      iteracion.persona={
                        id:this.temporalDataAdd.personaForm
                      }

                      this.crudService.add(iteracion,'estudios-curso/').subscribe({
                        next:este=>{
                          console.log(este)
                        },
                        error: error => {
                          console.error('Error:', error);
                        }
                      })
                    });

                    data.titulosForm.forEach((iteracion:any) => {
                      iteracion.persona={
                        id:this.temporalDataAdd.personaForm
                      }

                      this.crudService.add(iteracion,'titulos/').subscribe({
                        next:este=>{
                          console.log(este)
                        },
                        error: error => {
                          console.error('Error:', error);
                        }
                      })
                    });

                    data.familiaresForm.forEach((iteracion:any) => {
                      iteracion.persona={
                        id:this.temporalDataAdd.personaForm
                      }

                      this.crudService.add(iteracion,'familiar-labora-otra-entidad-publica/').subscribe({
                        next:este=>{
                          console.log(este)
                        },
                        error: error => {
                          console.error('Error:', error);
                        }
                      })
                    });
                    this.resetForm();
                    this.load();
                    this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
                    //const addDiscapacidad = data.discapacidadForm.for(id => this.nacionalidadService.deleteNacionalidad(id))
                  },
                  error: error => {
                    console.error('Error:', error);
                  }
                })
          },
          error: error => {
            console.error('Error:', error);
          }
        })
      },
      error: error => {
        console.error('Error:', error);
      }
    })

    /*this.crudService.add(discapacidad, 'discapacidad/').subscribe({
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

                        const modalidadJornadaValue = this.form.value.personaForm;

                        const modalidadJornada: Persona = {
                          ...modalidadJornadaValue,
                          modalidadJornada: modalidadJornadaValue.modalidadJornada?.value || modalidadJornadaValue.modalidadJornada
                        }

                        persona.telefono = String(persona.telefono)
                        persona.telefonoDomicilio = String(persona.telefonoDomicilio)

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
    });*/

    this.modal = false;
  }


  resetForm() {
    this.form.reset();
    this.selected = null;
    this.tableForm={
      discapacidad:[],
      enfermedad_catastrofica:[],
      familiar_Labora_otra_Entidad_Publica:[],
      estudios_en_curso:[],
      titulos:[]
    }
    this.activeIndex=0
  }

  cancel() {
    this.resetForm();
    this.modal = false;
    this.activeIndex=0
    this.visible={
      discapacidad:false,
      enfermedadCatastrofica:false,
      familiar:false,
      estudiosCurso:false,
      titulos:false
    }
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
    this.activeIndex=0;
    this.visible={
      discapacidad:false,
      enfermedadCatastrofica:false,
      familiar:false,
      estudiosCurso:false,
      titulos:false
    }
  }

  edit(register: Persona): void {

  }

  deleteRegister(id: number): void {

}

//table form


visible: any={
  discapacidad:false,
  enfermedadCatastrofica:false,
  familiar:false,
  estudiosCurso:false,
  titulos:false
}
dataIndex:any=null;

    showDialog(data:any) {
        this.visible[data] = true;
        
    }

    saveDiscapacidad(formSelectorTable:any,ValueFormData:any){
      console.log(this.form.value[ValueFormData])
      if(typeof this.dataIndex === 'number'){
        this.tableForm[formSelectorTable][this.dataIndex]=this.form.value[ValueFormData]
        this.dataIndex=null
      }else{
        this.tableForm[formSelectorTable].push(this.form.value[ValueFormData])
        
      }
      
      
    }

    deleteRegisterDiscapacidad(index:number){
      this.tableForm.discapacidad.splice(index, 1);

    }

    editDiscapacidad(data:any,index:number,dataDialog:any){
      this.dataIndex=index
      this.showDialog(dataDialog)
      console.log(data)
      this.form.patchValue({
        discapacidadForm:{
          id: data.id,
          numeroCarnet: data.numeroCarnet,
          porcentaje: data.porcentaje,
          tipoDiscapacidad: data.tipoDiscapacidad
        },
        estudiosenCursosForm:{
          id: data.id,
          nombre: data.nombre,
          tipoDeTitulo: data.tipoDeTitulo,
          numeroDeHoras: data.numeroDeHoras,
          fechaDeInicio:this.FechaOptener(data.fechaDeInicio),
          fechaDeFin: this.FechaOptener(data.fechaDeFin),
        },
        enfermedadCatastroficaForm:{
          id: data.id,
          cargoPersonaDiscapacidad: data.cargoPersonaDiscapacidad,
          institucionCertificaEnfermedad:data.institucionCertificaEnfermedad,
          tipoEnfermedad: data.tipoEnfermedad
        },
        familiaresForm:{
          id: data.id,
          nombre: data.nombre,
        },
        titulosForm:{
          id: data.id,
          titulosOptenidos: data.titulosOptenidos,
          numeroDeRegistroSenesyt: data.numeroDeRegistroSenesyt,
          intruccionFormal: data.intruccionFormal,
          institucion: data.institucion,
          anoDelTitulo:this.FechaOptener(data.anoDelTitulo),
        },
      })
    }
}
