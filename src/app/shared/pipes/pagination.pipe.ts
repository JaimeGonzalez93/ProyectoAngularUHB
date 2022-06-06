import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {
  constructor (
    private paginateService:PaginationService
  ){}

  transform(value: any[], page:number): any[] {
    this.paginateService.setMaxPage(Math.ceil(value.length/20));
    const start = page*20;
    const end = (page+1)*20;
    return value.slice(start,end);
  }

}
