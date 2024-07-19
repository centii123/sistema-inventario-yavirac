import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa los componentes que necesitas para las rutas
import { DocentesComponent } from './docentes/docentes.component';
import { DocentesInfoComponent } from './docentes-info/docentes-info.component';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioAulasComponent } from './inventario-aulas/inventario-aulas.component';
import { InventarioInfoAulasComponent } from './inventario-info-aulas/inventario-info-aulas.component';
import { InventarioInfoLaboratorioComponent } from './inventario-info-laboratorio/inventario-info-laboratorio.component';
import { InventarioInfoOficinasComponent } from './inventario-info-oficinas/inventario-info-oficinas.component';
import { InventarioLaboratoriosComponent } from './inventario-laboratorios/inventario-laboratorios.component';
import { InventarioOficinasComponent } from './inventario-oficinas/inventario-oficinas.component';
import { DocentesNewComponent } from './docentes-new/docentes-new.component';
import { FormComponent } from './componentes/nacionalidad/form/form.component';
import { UserGuard } from 'src/app/core/guards/user.guard';


// Define las rutas
const routes: Routes = [

  { path: 'docentes', pathMatch: 'full', redirectTo: 'docentes' },
  { path: 'docentes', component: DocentesComponent },
  { path: 'docentes-info', component: DocentesInfoComponent },
  { path: 'docentes-new', component: DocentesNewComponent },
  { path: 'inventario', component: InventarioComponent, data: { sidebarContent: 'inventario' } },
  { path: 'inventario-aulas', component: InventarioAulasComponent, data: { sidebarContent: 'inventario' } },
  { path: 'inventario-info-aulas', component: InventarioInfoAulasComponent, data: { sidebarContent: 'inventario' } },
  { path: 'inventario-info-laboratorio', component: InventarioInfoLaboratorioComponent, data: { sidebarContent: 'inventario' } },
  { path: 'inventario-info-oficinas', component: InventarioInfoOficinasComponent, data: { sidebarContent: 'inventario' } },
  { path: 'inventario-laboratorios', component: InventarioLaboratoriosComponent, data: { sidebarContent: 'inventario' } },
  { path: 'inventario-oficinas', component: InventarioOficinasComponent, data: { sidebarContent: 'inventario' } },
  { path: 'nacionalidad-table', component: InventarioLaboratoriosComponent },
  { path: 'nacionalidad', canActivate:[UserGuard], component: FormComponent },


  // Puedes añadir más rutas según necesites
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
