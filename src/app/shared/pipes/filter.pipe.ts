import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], criteria: string): any[] {
    return value.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(criteria.toLowerCase());
    })
  }

}
