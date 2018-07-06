import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    value=value.split('.')[0];
    let date;
    let time;
    date=value.split('T')[0].split('-').reverse().join('.');
    time=value.split('T')[1].substring(0,5);


    return date+" о "+time;
  }

}


