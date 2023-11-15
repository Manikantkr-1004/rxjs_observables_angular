import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { DataDisplayComponentComponent } from './data-display-component/data-display-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
