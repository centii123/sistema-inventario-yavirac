import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { BienesRoutingModule } from './bienes-routing.module';
import { CrudModules } from 'src/app/core/global-modules/crud-Modules.module';
import { CrudService } from '../service/crud.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { GlobalConfirmDialogModule } from 'src/app/shared/global-confirm-dialog/global-confirm-dialog.module';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    FormComponent,
    TableComponent,
  ],
  imports: [
    BienesRoutingModule,
    ...CrudModules,
    DropdownModule,
    InputNumberModule,
    GlobalConfirmDialogModule
  ],
  providers:[
    CrudService,{provide:'url', useValue:'bienes/'}
  ]
})
export class BienesModule { }
