import { PaginationService } from './../../core/services/pagination.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  constructor(
    private paginationService: PaginationService
  ){}

  transform(value: any[], page:number): any[]{
    this.paginationService.setMaxPage(Math.ceil(value.length/12));
    const start = page*12;
    const end = (page+1)*12;
    return value.slice(start,end);
  }

}
