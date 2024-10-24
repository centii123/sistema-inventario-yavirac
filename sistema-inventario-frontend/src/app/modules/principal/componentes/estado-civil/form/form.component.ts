import { Component, OnInit } from '@angular/core';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';
import { EstadoCivil } from '../../model/estado-civil';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {
  funcionalidad: CrudFuncionalidadFormService<EstadoCivil>;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<EstadoCivil>
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
  setSeleccionado(registro: EstadoCivil) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      nombre: registro.nombre
    });
    this.funcionalidad.modal = true;
  }



}
