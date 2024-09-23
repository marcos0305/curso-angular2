import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCasePipe',
  standalone: true
})
export class CamelCasePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {

    let values = value.split(' ');
    let result = '';

    for(let v of values){
      result += this.capitalize(v) + ' ';
    }

    return result;
  }
  capitalize(value: string){
    return value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();
  }
}
