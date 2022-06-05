import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { PaginatePipe } from './pipes/paginate.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    FilterComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    FilterComponent,
    PaginatePipe
  ]
})
export class SharedModule { }
