import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchString: string) {
    if (!items || !searchString) return items;
    return items.filter(
      item => item.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  }
}
