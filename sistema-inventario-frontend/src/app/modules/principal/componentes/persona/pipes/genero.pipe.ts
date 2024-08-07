import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genero'
})
export class GeneroPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Hombre';
      case 1:
        return 'Mujer';
      case 2:
        return 'Otros';
      default:
        return 'sin registro';
    }
  }

}
