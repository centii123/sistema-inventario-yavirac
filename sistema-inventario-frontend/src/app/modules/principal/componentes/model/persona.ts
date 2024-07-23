import { globalModels } from "src/app/core/models/globalModels";

export interface Discapacidad {
  id: number;
  numeroCarnet: string;
  porcentaje: number;
  tipoDiscapacidad: string;
}

export interface EnfermedadCatastrofica {
  id: number;
  certificadoEnfermedad: string;
  tipoEnfermedad: string;
}

export interface EntidadPublica {
  id: number;
  nombre: string;
}

export interface FechaIngresoInstituto {
  id: number;
  cambioGrupoOcupacionalModalidad: Date;
  cambioInstitutoFusion: Date;
  cambioOcupacionalEmergencia: Date;
  primerIngreso: Date;
}

export interface Aula {
  id: number;
  nombre: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface Persona extends globalModels {
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
  rmu: string;

  // FK
  escalaOcupacionales: any;
  estadoCivil: any;
  estudiosenCursos: any;
  genero: any;
  institutos: any;
  nacionalidad: any;
  carreras: any;
  provincia: any;
  rolesInstitucionales: any;

  // One-to-One
  discapacidad: Discapacidad;
  enfermedadCatastrofica: EnfermedadCatastrofica;
  entidadPublica: EntidadPublica;
  fechaIngresoInstituto: FechaIngresoInstituto;
  aula: Aula;
  user: User;
}
