import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../../node_modules/@angular/router';
import { ChoiceComponent } from './choice/choice.component';

const choiceRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'superheroes',  component: ChoiceComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(choiceRoutes),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ChoiceRoutingModule { }
