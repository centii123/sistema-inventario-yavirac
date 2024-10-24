import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { CategoriaBienes } from '../../model/categorias-bienes';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {

  funcionalidad: CrudFuncionalidadFormService<CategoriaBienes>;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<CategoriaBienes>
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
  setSeleccionado(registro: CategoriaBienes) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      nombre: registro.nombre
    });
    this.funcionalidad.modal = true;
  }


}
