import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { TitulosRoutingModule } from './titulos-routing.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    TitulosRoutingModule,
    CalendarModule,
    ...CrudModules
  ],
  providers:[
    CrudService,{provide:'url', useValue:'titulos/'},
    CrudFuncionalidadFormService
  ]

})
export class TitulosModule { }
