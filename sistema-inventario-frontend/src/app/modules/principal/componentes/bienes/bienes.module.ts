import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { BienesRoutingModule } from './bienes-routing.module';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { CrudService } from '../service/crud.service';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    BienesRoutingModule,
    ...CrudModules,
    DropdownModule
  ],
  providers:[
    CrudService,{provide:'url', useValue:'bienes/'}
  ]
})
export class BienesModule { }
