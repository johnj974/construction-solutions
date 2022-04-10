import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';


@NgModule({
  declarations: [
    HomeHomeComponent,
    HomeContactComponent,
    HomeAboutComponent,
    HomeSkillsComponent,
    HomeGalleryComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
