import { Component, OnInit } from '@angular/core';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';
import { FormControl, Validators } from '@angular/forms';
import { Genero } from '../../model/genero';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  funcionalidad: CrudFuncionalidadFormService<Genero>;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<Genero>
  ) {
    this.funcionalidad = funcionalidad
    this.funcionalidad.form = this.funcionalidad.initForm({
      id: new FormControl(null),
      nombre: new FormControl('', [Validators.required])
  });
  }

  ngOnInit(): void {
    this.funcionalidad.load();
  }
  setSeleccionado(registro: Genero) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      nombre: registro.nombre
    });
    this.funcionalidad.modal = true;
  }



}
