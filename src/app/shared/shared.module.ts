import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directive/highlight.directive';
import { DateFormaterPipe } from './pipes/dateFormater/date-formater.pipe';



@NgModule({
  declarations: [
    HighlightDirective,
    DateFormaterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
