 // Ajusta la ruta según tu estructura de proyecto

import { Persona } from "src/app/modules/principal/componentes/model/persona";

export function createFormData(persona: Persona): FormData {
  const formData = new FormData();

  formData.append('id', persona.id.toString());
  formData.append('nombres', persona.nombres);
  formData.append('apellidos', persona.apellidos);
  formData.append('etnia', persona.etnia);
  formData.append('fechaDeNacimiento', persona.fechaDeNacimiento.toISOString());
  formData.append('dni', persona.dni);
  formData.append('telefono', persona.telefono);
  formData.append('telefonoDomicilio', persona.telefonoDomicilio);
  formData.append('correoPersonal', persona.correoPersonal);
  formData.append('tipoDeSangre', persona.tipoDeSangre);
  formData.append('direccionDomiciliaria', persona.direccionDomiciliaria);
  formData.append('modalidadLaboral', persona.modalidadLaboral);
  formData.append('modalidadJornada', persona.modalidadJornada.toString());
  formData.append('horarioTrabajo', persona.horarioTrabajo);
  formData.append('materiasImparte', persona.materiasImparte);
  formData.append('rmu', persona.rmu.toString());

  // Relacionados
  formData.append('escalaOcupacionales', JSON.stringify(persona.escalaOcupacionales));
  formData.append('estadoCivil', JSON.stringify(persona.estadoCivil));
  formData.append('genero', JSON.stringify(persona.genero));
  formData.append('institutos', JSON.stringify(persona.institutos));
  formData.append('nacionalidad', JSON.stringify(persona.nacionalidad));
  formData.append('carreras', JSON.stringify(persona.carreras));
  formData.append('provincia', JSON.stringify(persona.provincia));
  formData.append('rolesInstitucionales', JSON.stringify(persona.rolesInstitucionales));

  // One-to-One
  formData.append('discapacidad', JSON.stringify(persona.discapacidad));
  formData.append('enfermedadCatastrofica', JSON.stringify(persona.enfermedadCatastrofica));
  formData.append('entidadPublica', JSON.stringify(persona.entidadPublica));
  formData.append('fechaIngresoInstituto', JSON.stringify(persona.fechaIngresoInstituto));
  formData.append('user', JSON.stringify(persona.user));

  return formData;
}
