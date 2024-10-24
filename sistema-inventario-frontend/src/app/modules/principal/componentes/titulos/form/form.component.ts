import { Component, OnInit } from '@angular/core';
import {FormControl,Validators } from '@angular/forms';
import { Titulos } from '../../model/titulos';
import { CrudFuncionalidadFormService } from '../../service/crud-funcionalidad-Form.service';
import { obtenerFecha } from 'src/app/core/functions/obtenerFecha';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./../../../../../core/styles/crudGlobal.css']
})
export class FormComponent implements OnInit {


  funcionalidad: CrudFuncionalidadFormService<Titulos>;

  constructor(
    funcionalidad: CrudFuncionalidadFormService<Titulos>
  ) {
    this.funcionalidad = funcionalidad
    this.funcionalidad.form = this.funcionalidad.initForm({
      id: new FormControl(null),
      titulosOptenidos:new FormControl('', [Validators.required]),
      institucion:new FormControl('', [Validators.required]),
      anoDelTitulo:new FormControl('', [Validators.required]),
      intruccionFormal:new FormControl('', [Validators.required]),
      numeroDeRegistroSenesyt:new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.funcionalidad.load();
  }
  setSeleccionado(registro: Titulos) {
    this.funcionalidad.selected = registro;
    this.funcionalidad.form.setValue({
      id: registro.id,
      titulosOptenidos:registro.titulosOptenidos,
      institucion:registro.institucion,
      anoDelTitulo:obtenerFecha(registro.anoDelTitulo),
      intruccionFormal:registro.intruccionFormal,
      numeroDeRegistroSenesyt:registro.numeroDeRegistroSenesyt,
    });
    this.funcionalidad.modal = true;
  }



}
