import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BazService } from '@foo/bar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
