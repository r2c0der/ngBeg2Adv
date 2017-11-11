import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favorite'
})
export class FavoritePipe implements PipeTransform {

  transform(obj: any, args?: any): any {
    return "<i class='fa fa-star' aria-hidden='true'></i>"+obj;
  }

}
