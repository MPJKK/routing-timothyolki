import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directionToClass'
})
export class DirectionToClassPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (value === 0) {
          return 'going';
      } else {
          return 'coming';
      }
  }

}
