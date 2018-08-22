import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceComponent } from './choice/choice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChoiceComponent],
  exports: [ChoiceComponent]
})
export class ChoiceModule { }
