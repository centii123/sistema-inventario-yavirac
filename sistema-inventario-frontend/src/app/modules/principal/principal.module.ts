import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { DocentesComponent } from './docentes/docentes.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
// Importaciones de PrimeNG
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule as PrimeCardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TableComponent } from './componentes/nacionalidad/table/table.component';
import { FormComponent } from './componentes/nacionalidad/form/form.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from "../../shared/card/card.module";
import { GlobalConfirmDialogModule } from "../../shared/global-confirm-dialog/global-confirm-dialog.module";

@NgModule({
  declarations: [
    DocentesComponent,
    InventarioComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // Importaciones de PrimeNG
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    PrimeCardModule, // Renombrado para evitar conflictos
    DividerModule,
    TableModule,
    InputNumberModule,
    CardModule,
    GlobalConfirmDialogModule
]
})
export class PrincipalModule { }
