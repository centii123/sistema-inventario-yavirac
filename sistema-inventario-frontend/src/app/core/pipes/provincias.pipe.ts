import { Pipe, PipeTransform } from '@angular/core';
import { provincias } from '../constants/constantes-globales';

@Pipe({
  name: 'provincias'
})
export class ProvinciasPipe implements PipeTransform {

  transform(value: number): string {
    const provincia = provincias.find(provincia => provincia.value === value);
    return provincia ? provincia.data : 'sin registro';
  }

}
