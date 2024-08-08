import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { MessageService } from 'primeng/api';
import { Persona,} from '../../model/persona';
import { affirmation, estadoCivil, genero, intruccionFormal, modalidadJornada, TipoDeSangre } from '../constants/constantes-persona';
import { provincias } from 'src/app/core/constants/constantes-globales';
import { obtenerFecha } from 'src/app/core/functions/obtenerFecha';


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
    discapacidad: [],
    enfermedad_catastrofica: [],
    familiar_Labora_otra_Entidad_Publica: [],
    estudios_en_curso: [],
    titulos: []
  };

  tableFormDelete:any={
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
    console.log('registro',registro)
    this.selected = registro;
    this.openModal();
    this.tableForm.discapacidad = Array.isArray(registro.discapacidad) ? [...registro.discapacidad] : [];
    this.tableForm.enfermedad_catastrofica = Array.isArray(registro.enfermedadCatastrofica) ? [...registro.enfermedadCatastrofica] : [];
    this.tableForm.familiar_Labora_otra_Entidad_Publica = Array.isArray(registro.familiarLaboraotraEntidadPublica) ? [...registro.familiarLaboraotraEntidadPublica] : [];
    this.tableForm.estudios_en_curso = Array.isArray(registro.estudiosenCursos) ? [...registro.estudiosenCursos] : [];
    this.tableForm.titulos = Array.isArray(registro.titulos) ? [...registro.titulos] : [];
    

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
        id:registro.fechaIngresoInstituto ? registro.fechaIngresoInstituto.id : null,
        primerIngreso:registro.fechaIngresoInstituto ? this.FechaOptener(registro.fechaIngresoInstituto.primerIngreso): null,
        cambioOcupacionalEmergencia:registro.fechaIngresoInstituto ? this.FechaOptener(registro.fechaIngresoInstituto.cambioOcupacionalEmergencia): null,
        cambioInstitutoFusion:registro.fechaIngresoInstituto ? this.FechaOptener(registro.fechaIngresoInstituto.cambioInstitutoFusion): null,
        cambioGrupoOcupacionalModalidad:registro.fechaIngresoInstituto ? this.FechaOptener(registro.fechaIngresoInstituto.cambioGrupoOcupacionalModalidad): null
      },//registro.fechaIngresoInstituto,
      userForm: registro.user
    });
  }


  saveStatus=true;
  hasNonNullFields(obj: any): boolean {
    if (!obj) return false;
    return Object.values(obj).some(value => value !== null && value !== undefined);
  }
  
  async save() {
    try {
      let data = this.form.value;
      this.temporalDataAdd = {
        fechaIngresoForm: null,
        entidadPublicaForm: null,
        userForm: null,
        personaForm: null
      };
  
      if (data.personaForm.id == null) {
        data.userForm = {
          username: data.personaForm.dni,
          password: data.personaForm.dni
        };
  
        const userResponse = await this.crudService.add(data.userForm, 'api/user/').toPromise();
        this.temporalDataAdd.userForm = userResponse.id;
        data.personaForm.user = { id: this.temporalDataAdd.userForm };
      } else {
        data.personaForm.user = data.userForm.id ? { id: data.userForm.id } : null;
        data.userForm = { id: null, username: null, password: null };
      }
  
      data.personaForm.carreras = { id: data.personaForm.carreras.id };
      data.personaForm.escalaOcupacionales = { id: data.personaForm.escalaOcupacionales.id };
      data.personaForm.institutos = { id: data.personaForm.institutos.id };
      data.personaForm.nacionalidad = { id: data.personaForm.nacionalidad.id };
      data.personaForm.rolesInstitucionales = { id: data.personaForm.rolesInstitucionales.id };
  
      data.discapacidadForm = this.tableForm.discapacidad;
      data.enfermedadCatastroficaForm = this.tableForm.enfermedad_catastrofica;
      data.familiaresForm = this.tableForm.familiar_Labora_otra_Entidad_Publica;
      data.estudiosenCursosForm = this.tableForm.estudios_en_curso;
      data.titulosForm = this.tableForm.titulos;
  
      if (data.fechaIngresoForm && this.hasNonNullFields(data.fechaIngresoForm) && this.saveStatus) {
        const fechaIngresoResponse = await this.crudService.add(data.fechaIngresoForm, 'fecha-ingreso-instituto/').toPromise();
        data.personaForm.fechaIngresoInstituto = { id: fechaIngresoResponse.id };
      }
  
      if (data.entidadPublicaForm && this.hasNonNullFields(data.entidadPublicaForm) && this.saveStatus) {
        const entidadPublicaResponse = await this.crudService.add(data.entidadPublicaForm, 'entidadPublica/').toPromise();
        data.personaForm.entidadPublica = { id: entidadPublicaResponse.id };
      }
  
      if (data.personaForm && this.hasNonNullFields(data.personaForm) && this.saveStatus) {
        const personaResponse = await this.crudService.add(data.personaForm).toPromise();
        this.temporalDataAdd.personaForm = personaResponse.id;
      }

      const saveArray = async (array: any[], endpoint: string) => {
        for (const item of array) {
          item.persona = { id: this.temporalDataAdd.personaForm };
          await this.crudService.add(item, endpoint).toPromise();
        }
      };
  
      if (data.enfermedadCatastroficaForm.length > 0 && this.saveStatus) {
        await saveArray(data.enfermedadCatastroficaForm, 'enfermedadCatastrofica/');
      }
  
      if (data.discapacidadForm.length > 0 && this.saveStatus) {
        await saveArray(data.discapacidadForm, 'discapacidad/');
      }
  
      if (data.estudiosenCursosForm.length > 0 && this.saveStatus) {
        await saveArray(data.estudiosenCursosForm, 'estudios-curso/');
      }
  
      if (data.titulosForm.length > 0 && this.saveStatus) {
        await saveArray(data.titulosForm, 'titulos/');
      }
  
      if (data.familiaresForm.length > 0 && this.saveStatus) {
        await saveArray(data.familiaresForm, 'familiar-labora-otra-entidad-publica/');
      }

      /*{
    discapacidad:[],
    enfermedad_catastrofica:[],
    familiar_Labora_otra_Entidad_Publica:[],
    estudios_en_curso:[],
    titulos:[]
  } */

      if(this.tableFormDelete.discapacidad.length > 0){
        this.deleteSelected('discapacidad','discapacidad/')
      }

      if(this.tableFormDelete.enfermedad_catastrofica.length > 0){
        this.deleteSelected('enfermedad_catastrofica','enfermedadCatastrofica/')
      }

      if(this.tableFormDelete.familiar_Labora_otra_Entidad_Publica.length > 0){
        this.deleteSelected('familiar_Labora_otra_Entidad_Publica','familiar-labora-otra-entidad-publica/')
      }

      if(this.tableFormDelete.estudios_en_curso.length > 0){
        this.deleteSelected('estudios_en_curso','estudios-curso/')
      }

      if(this.tableFormDelete.titulos.length > 0){
        this.deleteSelected('titulos','titulos/')
      }
  
      this.resetForm();
      this.load();
      this.messageService.add({ severity: 'success', summary: 'Registrado', detail: 'Registro agregado exitosamente!' });
      this.modal = false;
  
    } catch (error) {
      console.error('Error:', error);
      this.saveStatus = false;
    }
  }


  resetForm() {
    this.form.reset();
    this.selected = null;
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
    this.tableForm={
      discapacidad: [],
      enfermedad_catastrofica: [],
      familiar_Labora_otra_Entidad_Publica: [],
      estudios_en_curso: [],
      titulos: []
    };
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

visible: any={
  discapacidad:false,
  enfermedadCatastrofica:false,
  familiar:false,
  estudiosCurso:false,
  titulos:false
}
dataIndex:any=null;

    showDialog(data:any) {
      this.form.get('titulosForm')?.reset();
      this.form.get('discapacidadForm')?.reset();
      this.form.get('familiaresForm')?.reset();
      this.form.get('estudiosenCursosForm')?.reset();
      this.form.get('enfermedadCatastroficaForm')?.reset();
      this.visible[data] = true;
    }

    saveTableForm(formSelectorTable:string,ValueFormData:any){
      console.log( formSelectorTable,ValueFormData)
      if(typeof this.dataIndex === 'number'){
        this.tableForm[formSelectorTable][this.dataIndex]=this.form.value[ValueFormData]
        this.dataIndex=null
      }else{
        this.tableForm[formSelectorTable].push(this.form.value[ValueFormData])
        
      }
      this.visible={
        discapacidad:false,
        enfermedadCatastrofica:false,
        familiar:false,
        estudiosCurso:false,
        titulos:false
      }
      
    }

    deleteSelected(tableForm:string,url:any): void {
      const idsToDelete = this.tableFormDelete[tableForm].map((n:any) => n.id);
      if (idsToDelete.length === 0) {
        return;
      }
  
      const deleteObservables = idsToDelete.map((id:any) => this.crudService.delete(id,`${url}${'fisica/'}`));
      deleteObservables.forEach((e:any) => {
        e.subscribe(
          () => {
            this.list = this.list.filter(n => !idsToDelete.includes(n.id));
            this.tableFormDelete[tableForm]=[]
          },
          (error:any) => {
            console.error('Error deleting:', error);
          }
        );
      })
      
      //forkJoin(deleteObservables)
    }

    deleteRegisterDiscapacidad(index:number,formSelectorTable:any){
      if (this.tableForm && this.tableForm[formSelectorTable]) {
        if(this.tableForm[formSelectorTable][index].id){
          this.tableFormDelete[formSelectorTable].push(this.tableForm[formSelectorTable][index])
        }
        this.tableFormDelete[formSelectorTable].push
        this.tableForm[formSelectorTable].splice(index, 1);
      } else {
        console.error('tableForm or formSelectorTable is undefined');
      }

    }

    editDiscapacidad(data:any,index:number,dataDialog:any){
      this.dataIndex=index
      this.showDialog(dataDialog)
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
