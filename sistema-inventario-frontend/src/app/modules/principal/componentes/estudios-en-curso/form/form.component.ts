import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { EstudiosEnCurso } from '../../model/estudios-en-curso';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {

  funcionalidad: CrudFuncionalidadFormService<EstudiosEnCurso>;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<EstudiosEnCurso>
  ) {
    this.funcionalidad = funcionalidad
    this.funcionalidad.form = this.funcionalidad.initForm({
      id: new FormControl(null),
      tipoDeTitulo: new FormControl('', [Validators.required]),
      fechaDeInicio: new FormControl('', [Validators.required]),
      fechaDeFin: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      numeroDeHoras: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.funcionalidad.load();
  }
  setSeleccionado(registro: EstudiosEnCurso) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      tipoDeTitulo: registro.tipoDeTitulo,
      fechaDeInicio: registro.fechaDeInicio,
      fechaDeFin: registro.fechaDeFin,
      nombre: registro.nombre,
      numeroDeHoras: registro.numeroDeHoras
    });
    this.funcionalidad.modal = true;
  }


}
