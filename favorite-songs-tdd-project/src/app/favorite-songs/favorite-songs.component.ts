import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-songs',
  templateUrl: './favorite-songs.component.html',
  styleUrls: ['./favorite-songs.component.scss']
})
export class FavoriteSongsComponent implements OnInit {

  constructor() { }

  favoriteSongs: any[] = [
    { title: 'What goes around comes around', singer: 'Justin Timberlake' },
    { title: 'Careless Whisper', singer: 'George Michael' },
    { title: 'Highway To Hell', singer: 'AC/DC'},
  ];

  ngOnInit(): void {
  }

}
