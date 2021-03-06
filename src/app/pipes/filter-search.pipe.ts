import { Pipe, PipeTransform } from '@angular/core';
import { ListData } from '../list-data';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {
  transform(
    value: ListData[],
    dataFilter: string,
    dataFilterLanguage: string,
    isNameAsc: boolean,
    isLenguajeAsc: boolean,
    isSize: boolean
  ): any {
    const DataToShow = [];

    if (value === undefined) {
      return null;
    }

    value.forEach((item) => {
      if (
        item.author.toLowerCase().trim().match(dataFilter.toLowerCase().trim())
      ) {
        if (
          item.type
            .toLowerCase()
            .trim()
            .match(dataFilterLanguage.toLowerCase().trim())
        ) {
          DataToShow.push(item);
        }
      }
    });
    if (isSize) {
      return DataToShow.length;
    }
    if (isLenguajeAsc !== null) {
      return DataToShow.sort((a, b) => {
        const x = a['type'],
          y = b['type'];

        if (isNameAsc) {
          return x < y ? -1 : x > y ? 1 : 0;
        }

        if (!isNameAsc) {
          return x > y ? -1 : x < y ? 1 : 0;
        }
      });
    } else if (isNameAsc !== null) {
      return DataToShow.sort((a, b) => {
        const x = a['author'],
          y = b['author'];

        if (isNameAsc) {
          return x < y ? -1 : x > y ? 1 : 0;
        }

        if (!isNameAsc) {
          return x > y ? -1 : x < y ? 1 : 0;
        }
      });
    }
  }
}
