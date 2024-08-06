import { globalModels } from "src/app/core/models/globalModels";

export interface Discapacidad {
  id: number;
  numeroCarnet: string;
  porcentaje: number;
  tipoDiscapacidad: string;
}

export interface EnfermedadCatastrofica {
  id: number;
  cargoDiscapacidad: string;
  certificadoEnfermedad: string;
  tipoEnfermedad: string;
}

export interface EntidadPublica {
  id: number;
  entidadPublica: number;
  honorarioSenecsyt: number;
  familiarSenecsyt:number;
  nombreFamiliar: string;
  observaciones: string;
  codigoInstituto: string;
}

export interface FechaIngresoInstituto {
  id: number;
  cambioGrupoOcupacionalModalidad: Date;
  primerIngreso: Date;
  cambioInstitutoFusion: Date;
  cambioOcupacionalEmergencia: Date;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Persona extends globalModels {
  aula: any;
  id: number;
  nombres: string;
  apellidos: string;
  etnia: string;
  fechaDeNacimiento: Date;
  dni: string;
  telefono: string;
  telefonoDomicilio: string;
  correoPersonal: string;
  tipoDeSangre: string;
  direccionDomiciliaria: string;
  modalidadLaboral: string;
  modalidadJornada: number;
  horarioTrabajo: string;
  materiasImparte: string;
  rmu: number;

  // FK
  escalaOcupacionales: any;
  estadoCivil: any;
  
  genero: any;
  institutos: any;
  nacionalidad: any;
  carreras: any;
  provincia: any;
  rolesInstitucionales: any;

  // One-to-One
  titulos:never[];
  discapacidad: never[];
  familiarLaboraotraEntidadPublica:never[]
  estudiosenCursos: never[];
  enfermedadCatastrofica: EnfermedadCatastrofica;
  entidadPublica: EntidadPublica;
  fechaIngresoInstituto: FechaIngresoInstituto;
  user: User;
}
