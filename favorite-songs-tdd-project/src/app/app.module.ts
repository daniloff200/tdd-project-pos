import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteSongsComponent } from './favorite-songs/favorite-songs.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteSongsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
