import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class FavoriteSongsService {
  constructor() {}

  getFavoriteSongs(): Observable<any> {
    const favoriteSongs: any[] = [
        { title: 'What goes around comes around', singer: 'Justin Timberlake' },
        { title: 'Careless Whisper', singer: 'George Michael' },
        { title: 'Highway To Hell', singer: 'AC/DC'},
        { title: 'Du Hast', singer: 'Rammstein'}
      ];

    return of(favoriteSongs);
  }
}
