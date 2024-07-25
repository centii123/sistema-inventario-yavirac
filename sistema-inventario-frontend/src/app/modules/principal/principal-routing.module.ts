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


// Define las rutas
const routes: Routes = [
  { path: 'estado-civil', loadChildren: () => import('./componentes/estado-civil/estado-civil.module').then(m => m.EstadoCivilModule) },
  { path: 'categoria-aula', loadChildren: () => import('./componentes/categorias-aula/categorias-aula.module').then(m => m.CategoriasAulaModule), data: { sidebarContent: 'inventario' } },
  { path: 'bienes', loadChildren: () => import('./componentes/bienes/bienes.module').then(m => m.BienesModule), data: { sidebarContent: 'inventario' } },
  { path: 'persona', loadChildren: () => import('./componentes/persona/persona.module').then(m => m.PersonaModule), },
  { path: 'categoria-bien', loadChildren: () => import('./componentes/categorias-bienes/categorias-bienes.module').then(m => m.CategoriasBienesModule), data: { sidebarContent: 'inventario' } },
  { path: 'estudios-curso', loadChildren: () => import('./componentes/estudios-en-curso/estudios-en-curso.module').then(m => m.EstudiosEnCursoModule) },
  { path: 'aula', loadChildren: () => import('./componentes/aula/aulas.module').then(m => m.AulasModule) },
  { path: 'instituto', loadChildren: () => import('./componentes/instituto/institutos.module').then(m => m.InstitutosModule) },
  { path: 'provincia', loadChildren: () => import('./componentes/provincia/provincias.module').then(m => m.ProvinciasModule) },
  { path: 'rol-institucional', loadChildren: () => import('./componentes/rol-institutcional/roles_institucionales.module').then(m => m.RolesInstitucionalesModule) },
  { path: 'carreras', loadChildren: () => import('./componentes/carreras/carreras.module').then(m => m.CarrerasModule) },
  { path: 'enfermedad-catastrofica', loadChildren: () => import('./componentes/enfermedad-catastrofica/enfermedad-catastrofica.module').then(m => m.EnfermdadCatastroficaModule) },
  { path: 'titulos', loadChildren: () => import('./componentes/titulos/titulos.module').then(m => m.TitulosModule) },
  { path: 'generos', loadChildren: () => import('./componentes/genero/genero.module').then(m => m.GeneroModule) },
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
  { path: 'nacionalidad', component: FormComponent },

  // Puedes añadir más rutas según necesites
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
