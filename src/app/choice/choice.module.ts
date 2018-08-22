import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoiceComponent } from './choice/choice.component';
import { ChoiceRoutingModule } from './/choice-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChoiceRoutingModule
  ],
  declarations: [ChoiceComponent],
  exports: [ChoiceComponent]
})
export class ChoiceModule { }
