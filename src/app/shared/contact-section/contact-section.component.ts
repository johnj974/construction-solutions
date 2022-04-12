import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit {
  //.
  toContact() {
    this.router.navigate(['/contact']);
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
