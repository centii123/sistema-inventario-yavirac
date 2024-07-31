import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from '../componentes/service/crud.service';
import { CrudFuncionalidadFormService } from '../componentes/service/crud-funcionalidad-Form.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CrudService,{provide:'url', useValue:'categorias-aulas/'},
    CrudFuncionalidadFormService
  ]
})
export class InventarioModule { }
