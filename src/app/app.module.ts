import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigitComponent } from './components/digit/digit.component';
import { ColonComponent } from './components/colon/colon.component';
import { DigitalComponent } from './clock/digital/digital.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitComponent,
    ColonComponent,
    DigitalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
