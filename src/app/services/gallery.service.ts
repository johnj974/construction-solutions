import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  //.
  photoNames: string[] = [
    'blue-stairs',
    'blueBookshelf',
    'building',
    'finish-deck',
    'landingWainscotting',
    'shelf',
    'stairsWainscotting',
    'straight-bookshelf',
    'top-landing',
    'two-doors',
    'upstairs',
  ];

  retrievePhotoNames() {
    return this.photoNames.slice();
  }

  constructor() {}
}
