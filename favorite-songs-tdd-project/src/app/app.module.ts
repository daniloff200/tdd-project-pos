import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteSongsComponent } from './favorite-songs/favorite-songs.component';
import { FavoriteSongsService } from './favorite-songs/favorite-songs.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteSongsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FavoriteSongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
