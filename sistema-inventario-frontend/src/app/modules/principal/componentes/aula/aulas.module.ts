import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { AulasRoutingModule } from './aulas-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    AulasRoutingModule,
    ...CrudModules,
    DropdownModule,
    InputNumberModule
  ],
  providers: [
    CrudService, { provide: 'url', useValue: 'aula/' },

  ]

})
export class AulasModule { }