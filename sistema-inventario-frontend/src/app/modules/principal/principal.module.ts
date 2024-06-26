import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa el módulo de rutas que creaste
import { PrincipalRoutingModule } from './principal-routing.module';

// Importa todos los componentes que necesitas en este módulo
import { DocentesComponent } from './docentes/docentes.component';
import { DocentesInfoComponent } from './docentes-info/docentes-info.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioAulasComponent } from './inventario-aulas/inventario-aulas.component';
import { InventarioInfoAulasComponent } from './inventario-info-aulas/inventario-info-aulas.component';
import { InventarioInfoLaboratorioComponent } from './inventario-info-laboratorio/inventario-info-laboratorio.component';
import { InventarioInfoOficinasComponent } from './inventario-info-oficinas/inventario-info-oficinas.component';
import { InventarioLaboratoriosComponent } from './inventario-laboratorios/inventario-laboratorios.component';
import { InventarioOficinasComponent } from './inventario-oficinas/inventario-oficinas.component';

@NgModule({
  declarations: [
    DocentesComponent,
    DocentesInfoComponent,
    InventarioComponent,
    InventarioAulasComponent,
    InventarioInfoAulasComponent,
    InventarioInfoLaboratorioComponent,
    InventarioInfoOficinasComponent,
    InventarioLaboratoriosComponent,
    InventarioOficinasComponent
    // Asegúrate de listar todos los componentes aquí
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
    // No es necesario importar BrowserModule, FormsModule, o BrowserAnimationsModule aquí si ya están en AppModule
  ]
})
export class PrincipalModule { }
