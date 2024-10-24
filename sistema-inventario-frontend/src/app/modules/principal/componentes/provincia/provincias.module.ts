import { NgModule } from '@angular/core';
import { FormComponent } from './from/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { ProvinciasRoutingModule } from './provincias-routing.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    ProvinciasRoutingModule,
    ...CrudModules
  ],
  providers: [
    CrudService, { provide: 'url', useValue: 'provincias/' },
    CrudFuncionalidadFormService

  ]

})
export class ProvinciasModule { }
