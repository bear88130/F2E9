import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ChoiceModule } from './choice/choice.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChoiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
