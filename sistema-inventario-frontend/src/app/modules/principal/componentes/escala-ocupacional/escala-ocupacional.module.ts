import { NgModule } from '@angular/core';
import { FormComponent } from './from/form.component';
import { TableComponent } from './table/table.component';
import { CrudService } from '../service/crud.service';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { CrudFuncionalidadFormService } from '../service/crud-funcionalidad-Form.service';
import { EscalaOcupacionalRoutingModule } from './escala-ocupacional-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    EscalaOcupacionalRoutingModule,
    ...CrudModules
  ],
  providers: [
    CrudService, { provide: 'url', useValue: 'escala-ocupacional/' },
    CrudFuncionalidadFormService

  ]

})
export class EscalaOcupacionalModule { }
