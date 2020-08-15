import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigitComponent } from './components/digit/digit.component';
import { ColonComponent } from './components/colon/colon.component';
import { DigitalClockComponent } from './clock/digital/digital-clock.component';
import { AdjusterComponent } from './clock/adjuster/adjuster.component';
import { AnalogClockComponent } from './clock/analog/analog-clock.component';
import { HandComponent } from './components/hand/hand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DigitComponent,
    ColonComponent,
    DigitalClockComponent,
    AdjusterComponent,
    AnalogClockComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
