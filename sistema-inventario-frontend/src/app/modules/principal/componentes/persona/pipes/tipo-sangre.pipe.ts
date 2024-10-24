import { Pipe, PipeTransform } from '@angular/core';
import { TipoDeSangre } from '../constants/constantes-persona';

@Pipe({
  name: 'tipoSangre'
})
export class TipoSangrePipe implements PipeTransform {

  transform(value: number): string {
    const TipoSangre = TipoDeSangre.find(provincia => provincia.value === value);
    return TipoSangre ? TipoSangre.data : 'sin registro';
  }

}