import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ActivityModule } from './activity/activity.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, HttpClientModule, ActivityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
