import { Component } from '@angular/core';
import { CategoriaAula } from '../componentes/model/categoria-aula';
import { CrudFuncionalidadTableService } from '../componentes/service/crud-funcionalidad-table.service';
import { CrudService } from '../componentes/service/crud.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  list: CategoriaAula[] = [];
  loading: boolean = false;


  constructor(private crudService: CrudService) {

  }
}
