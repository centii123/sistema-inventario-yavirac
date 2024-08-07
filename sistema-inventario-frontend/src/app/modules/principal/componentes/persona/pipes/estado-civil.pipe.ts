import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCivil'
})
export class EstadoCivilPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case 0:
        return 'Soltero/a';
      case 1:
        return 'Casado/a';
      case 2:
        return 'Divorciado/a';
        case 3:
        return 'Viudo/a';
      default:
        return 'sin registro';
    }
  }

}
