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

// Define las rutas
const routes: Routes = [
    {
        path:'',
        children:
        [
            { path: 'docentes', component: DocentesComponent },
            { path: 'docentes-info', component: DocentesInfoComponent },
            { path: 'inventario', component: InventarioComponent },
            { path: 'inventario-aulas', component: InventarioAulasComponent },
            { path: 'inventario-info-aulas', component: InventarioInfoAulasComponent },
            { path: 'inventario-info-laboratorio', component: InventarioInfoLaboratorioComponent },
            { path: 'inventario-info-oficinas', component: InventarioInfoOficinasComponent },
            { path: 'inventario-laboratorios', component: InventarioLaboratoriosComponent },
            { path: 'inventario-oficinas', component: InventarioOficinasComponent },
        ]
    }
  
  // Puedes añadir más rutas según necesites
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
