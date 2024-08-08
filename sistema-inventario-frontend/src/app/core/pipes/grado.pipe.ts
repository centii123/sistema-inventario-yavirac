import { Pipe, PipeTransform } from '@angular/core';
import { grado, Grado } from '../constants/constantes-globales';

@Pipe({
  name: 'grado'
})
export class GradoPipe implements PipeTransform {

  transform(value: number): string {
    const foundGrado: Grado | undefined = grado.find(grado => grado.value === value);
    return foundGrado ? foundGrado.data : 'sin registro';
  }
}
