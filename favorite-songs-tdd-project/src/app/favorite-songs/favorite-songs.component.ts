import { Component, OnInit } from '@angular/core';
import { FavoriteSongsService } from './favorite-songs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-songs',
  templateUrl: './favorite-songs.component.html',
  styleUrls: ['./favorite-songs.component.scss']
})
export class FavoriteSongsComponent implements OnInit {

  favoriteSongs$: Observable<any[]>;
  constructor(private favoriteSongService: FavoriteSongsService) {}

  ngOnInit(): void {
    this.favoriteSongs$ = this.favoriteSongService.getFavoriteSongs();
  }

}
