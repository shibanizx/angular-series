import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {
  
  transform(value: string, args?: string): any {

    if(!value)
      return null;
    
    value = value.replace(/\s+/g, '-');
    return value.toLowerCase();
  }
}
