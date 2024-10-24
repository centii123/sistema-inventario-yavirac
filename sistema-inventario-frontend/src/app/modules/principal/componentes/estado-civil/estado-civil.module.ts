import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { EstadoCivilRoutingModule } from './estado-civil-routing.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';
import { CrudFuncionalidadTableService } from '../service/crud-funcionalidad-table.service';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    EstadoCivilRoutingModule,
    ...CrudModules
  ],
  providers:[
    CrudService,{provide:'url', useValue:'estado-civil/'},
    CrudFuncionalidadFormService,CrudFuncionalidadTableService
  ]

})
export class EstadoCivilModule { }
