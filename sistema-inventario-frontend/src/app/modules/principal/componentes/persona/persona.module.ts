import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { CrudService } from '../service/crud.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { PersonaRoutingModule } from './persona-routing.module';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    PersonaRoutingModule,
    ...CrudModules,
    DropdownModule,
    InputNumberModule,
    TabViewModule
  ],
  providers:[
    CrudService,{provide:'url', useValue:'persona/'}
  ]
})
export class PersonaModule { }
