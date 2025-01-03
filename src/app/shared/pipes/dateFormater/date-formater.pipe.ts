import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormater',
  standalone: false
})
export class DateFormaterPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    var date = new Date(value);
    console.log(date);
    return date.toDateString();
  }

}
