import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value[0].toUpperCase() + value.substring(1) + args;
  }

}
