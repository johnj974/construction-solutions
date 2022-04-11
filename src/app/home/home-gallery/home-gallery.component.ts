import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css'],
})
export class HomeGalleryComponent implements OnInit {
  //.
  toGallery() {
    this.router.navigate(['/gallery']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
