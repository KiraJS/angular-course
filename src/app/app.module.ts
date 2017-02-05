import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TeddyComponent } from './teddy/teddy.component';
import { LeftViewComponent } from './left-view/left-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    TeddyComponent,
    LeftViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
