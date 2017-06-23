import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
  name: 'orderTable'
})

@Injectable()
export class OrderTablePipe implements PipeTransform {

  sortMap(map: any[], field: string, type: string) {

    let sorted = [];

    if(field == "id" && type == "+") {
      sorted = map.sort((a: any, b: any) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if(field == "id" && type == "-") {
      sorted = map.sort((a: any, b: any) => {
        if (a.id > b.id) {
          return -1;
        } else if (a.id < b.id) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if(field == "name" && type == "+") {
      sorted = map.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if(field == "name" && type == "-") {
      sorted = map.sort((a: any, b: any) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return sorted
  }

  transform(items: any[], value: string, type: string): any[] {

    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }

    return this.sortMap(items, value, type);
  }
}