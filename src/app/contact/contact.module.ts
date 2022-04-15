import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactMainComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule,ReactiveFormsModule],
})
export class ContactModule {}
