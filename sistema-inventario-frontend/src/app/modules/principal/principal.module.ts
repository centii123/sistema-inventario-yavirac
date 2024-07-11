import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { DocentesComponent } from './docentes/docentes.component';
import { DocentesInfoComponent } from './docentes-info/docentes-info.component';
import { DocentesNewComponent } from './docentes-new/docentes-new.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioAulasComponent } from './inventario-aulas/inventario-aulas.component';
import { InventarioInfoAulasComponent } from './inventario-info-aulas/inventario-info-aulas.component';
import { InventarioInfoLaboratorioComponent } from './inventario-info-laboratorio/inventario-info-laboratorio.component';
import { InventarioInfoOficinasComponent } from './inventario-info-oficinas/inventario-info-oficinas.component';
import { InventarioLaboratoriosComponent } from './inventario-laboratorios/inventario-laboratorios.component';
import { InventarioOficinasComponent } from './inventario-oficinas/inventario-oficinas.component';
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
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TableComponent } from './componentes/nacionalidad/table/table.component';
import { FormComponent } from './componentes/nacionalidad/form/form.component';

@NgModule({
  declarations: [
    DocentesComponent,
    DocentesInfoComponent,
    DocentesNewComponent,
    InventarioComponent,
    InventarioAulasComponent,
    InventarioInfoAulasComponent,
    InventarioInfoLaboratorioComponent,
    InventarioInfoOficinasComponent,
    InventarioLaboratoriosComponent,
    InventarioOficinasComponent,
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
     CardModule,
     DividerModule,
     TableModule,

    // No es necesario importar BrowserModule, FormsModule, o BrowserAnimationsModule aquí si ya están en AppModule
  ]

})
export class PrincipalModule { }
