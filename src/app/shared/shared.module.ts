import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './components/filter/filter.component';



@NgModule({
  declarations: [
    FilterPipe,
    FilterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe,
    FilterComponent
  ]
})
export class SharedModule { }
