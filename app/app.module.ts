import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatIconModule,
  MatRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SvgBatteryComponent } from './svg-battery/svg-battery.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule,
    MatButtonModule, MatIconModule,
    MatTabsModule],
  declarations: [AppComponent, SvgBatteryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
