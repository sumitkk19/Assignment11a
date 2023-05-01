import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MyRev'
})
export class MyRevPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.split('').reverse().join('');
  }
}
