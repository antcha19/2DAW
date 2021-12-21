import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//para trabjar con formularios
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
