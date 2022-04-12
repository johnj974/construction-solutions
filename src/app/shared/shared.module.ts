import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [HeaderComponent, ContactSectionComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ContactSectionComponent],
})
export class SharedModule {}
