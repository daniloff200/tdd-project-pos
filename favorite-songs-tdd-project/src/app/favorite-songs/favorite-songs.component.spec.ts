import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSongsComponent } from './favorite-songs.component';
import { By } from '@angular/platform-browser';

describe('FavoriteSongsComponent', () => {
  let component: FavoriteSongsComponent;
  let fixture: ComponentFixture<FavoriteSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should have a title', () => {
      const titleElements = fixture.debugElement.queryAll(By.css('h1'));
      expect(titleElements.length).toBe(1);
      expect(titleElements[0].nativeElement.innerHTML).toBe('My favorite songs');
  });
});
