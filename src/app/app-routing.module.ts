import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChoiceComponent } from './choice/choice/choice.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'choice',  component: ChoiceComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
