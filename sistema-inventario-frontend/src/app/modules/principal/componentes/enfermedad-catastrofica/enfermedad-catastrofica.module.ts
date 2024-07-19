import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { EnfermdadCatastroficaRoutingModule } from './enfermedad-catastrofica-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    EnfermdadCatastroficaRoutingModule,
    ...CrudModules
  ],
  providers:[
    CrudService,{provide:'url', useValue:'enfermedad-catastrofica/'}
  ]

})
export class EnfermdadCatastroficaModule { }