import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormater',
  standalone: false
})
export class DateFormaterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
