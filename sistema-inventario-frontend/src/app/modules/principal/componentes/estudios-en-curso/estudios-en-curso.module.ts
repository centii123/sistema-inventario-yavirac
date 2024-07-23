import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { EstudiosEnCursoRoutingModule } from './estudios-en-curso-routing.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    EstudiosEnCursoRoutingModule,
    ...CrudModules
  ],
  providers:[
    CrudService,{provide:'url', useValue:'estudios-curso/'},
    CrudFuncionalidadFormService
  ]

})
export class EstudiosEnCursoModule { }
