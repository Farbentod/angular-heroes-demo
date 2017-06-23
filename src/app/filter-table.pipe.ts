import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'filterTable'
})

@Injectable()
export class FilterTablePipe implements PipeTransform {
  transform(items: any[], value: string): any[] {

    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(singleItem => {
      return Object.keys(singleItem).find(
        key => singleItem[key].toString().toLowerCase().includes(value)
      );
    });
  }
}