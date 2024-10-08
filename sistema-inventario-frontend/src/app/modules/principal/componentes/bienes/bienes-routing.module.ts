import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';


// Define las rutas
const routes: Routes = [
  { path: ':id', component: FormComponent },
  { path: '', component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BienesRoutingModule { }