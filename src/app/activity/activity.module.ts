import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateActivityComponent } from './generate-activity/generate-activity.component';
import { FavoriteActivityComponent } from './favorite-activity/favorite-activity.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [GenerateActivityComponent, FavoriteActivityComponent],
  imports: [CommonModule, BrowserModule],
  exports: [GenerateActivityComponent, FavoriteActivityComponent],
})
export class ActivityModule {}
