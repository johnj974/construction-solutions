import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css'],
})
export class HomeContactComponent implements OnInit {
  //.
  toContact() {
    this.router.navigate(['/contact']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
