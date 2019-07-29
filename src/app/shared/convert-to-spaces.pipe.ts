import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpacesPipe'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, charactor: string): string {
    return value.replace(' ', charactor);
  }
}