import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { RolesInstitucionales } from '../../model/roles_institucionales';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {


  funcionalidad: CrudFuncionalidadFormService<RolesInstitucionales>;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<RolesInstitucionales>
  ) {
    this.funcionalidad = funcionalidad
    this.funcionalidad.form = this.funcionalidad.initForm({
      id: new FormControl(null),
      descripcion: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
    this.funcionalidad.load();
  }
  setSeleccionado(registro: RolesInstitucionales) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      descripcion: registro.descripcion,

    });
    this.funcionalidad.modal = true;
  }

}
