import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';
import { EscalaOcupacional } from '../../model/escala-ocupacionales';
import { grado } from 'src/app/core/constants/constantes-globales';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {

  funcionalidad: CrudFuncionalidadFormService<EscalaOcupacional>;
  formSelectDataGrado: any[] = grado;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<EscalaOcupacional>
  ) {
    this.funcionalidad = funcionalidad
    this.funcionalidad.form = this.funcionalidad.initForm({
      id: new FormControl(null),
      grupoOcupacional: new FormControl('', [Validators.required]),
      grado: new FormControl('', [Validators.required]),
      remuneracion: new FormControl(0, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.funcionalidad.load();
  }

  setSeleccionado(registro: EscalaOcupacional) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      grupoOcupacional: registro.grupoOcupacional,
      grado: registro.grado,
      remuneracion: registro.remuneracion,
    });
    this.funcionalidad.modal = true;
  }

}
