import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFirstComponent } from './view-first/view-first.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewFirstComponent],
  exports: [ViewFirstComponent]
})
export class ViewModule { }
