import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string) {
    if(searchText === '') {
      return items;
    }

    return items.filter(function(items: any) {

      return items.name.toLowerCase().includes(searchText.toLowerCase());
    } 
 )
  
}

}