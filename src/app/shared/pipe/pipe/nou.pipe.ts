import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'nou'
})
export class NouPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null || value == undefined) {
      return '';
    } else {
      return value;
    }
  }

}
