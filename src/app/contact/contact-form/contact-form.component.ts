import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  //.
  contactForm: FormGroup;
  formSubmitted = false;

  onSubmit() {
    console.log(this.contactForm);
    console.log(this.contactForm.status);
    this.formSubmitted = true;
    setTimeout(() => {
      this.contactForm.reset();
      this.formSubmitted = false;
    }, 5000);
  }

  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }
}
