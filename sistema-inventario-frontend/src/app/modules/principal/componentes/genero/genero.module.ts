import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';
import { CrudFuncionalidadTableService } from '../service/crud-funcionalidad-table.service';
import { GeneroRoutingModule } from './genero-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    GeneroRoutingModule,
    ...CrudModules
  ],
  providers:[
    CrudService,{provide:'url', useValue:'generos/'},
    CrudFuncionalidadFormService,CrudFuncionalidadTableService
  ]

})
export class GeneroModule { }
