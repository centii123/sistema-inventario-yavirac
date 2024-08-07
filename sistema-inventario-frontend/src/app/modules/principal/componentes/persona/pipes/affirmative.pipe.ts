import { Pipe, PipeTransform } from '@angular/core';
import { affirmation } from '../constants/constantes-persona';

@Pipe({
  name: 'affirmative'
})
export class AffirmativePipe implements PipeTransform {

  transform(value: number): string {
    const affirmative = affirmation.find(affirmation => affirmation.value === value);
    return affirmative ? affirmative.label : 'sin registro';
  }

}
