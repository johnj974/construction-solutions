import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHomeComponent } from './home-home/home-home.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeHomeComponent,
    HomeAboutComponent,
    HomeSkillsComponent,
    HomeGalleryComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
