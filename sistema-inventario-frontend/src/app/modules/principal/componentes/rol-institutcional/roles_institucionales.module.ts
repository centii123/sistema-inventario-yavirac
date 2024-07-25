import { NgModule } from '@angular/core';
import { FormComponent } from './from/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { RolesInstitucionalesRoutingModule } from './roles_institucionales-routing.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    RolesInstitucionalesRoutingModule,
    ...CrudModules
  ],
  providers:[
    CrudService,{provide:'url', useValue:'roles-institucionales/'},
    CrudFuncionalidadFormService

  ]

})
export class RolesInstitucionalesModule { }
