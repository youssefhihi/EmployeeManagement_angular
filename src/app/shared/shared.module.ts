import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormaterPipe } from './pipes/dateFormater/date-formater.pipe';
import { InputComponent } from './components/input/input.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { SelectOptionsComponent } from './components/select-options/select-options.component';



@NgModule({
  declarations: [
    DateFormaterPipe,
    InputComponent,
    HighlightDirective,
    SelectOptionsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateFormaterPipe,
    InputComponent,
    HighlightDirective,
    SelectOptionsComponent
    ]
})
export class SharedModule { }
