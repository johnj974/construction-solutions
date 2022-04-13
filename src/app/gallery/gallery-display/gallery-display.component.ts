import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-display',
  templateUrl: './gallery-display.component.html',
  styleUrls: ['./gallery-display.component.css'],
})
export class GalleryDisplayComponent implements OnInit {
  //.
  photoGallery = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.photoGallery = this.galleryService.retrievePhotoNames();
  }
}
