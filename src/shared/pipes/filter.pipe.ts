import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, fieldName: string, value: string): Array<any> {
        return items.filter(item => {
            return !value || (item[fieldName] && item[fieldName].toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        });
    }
}
