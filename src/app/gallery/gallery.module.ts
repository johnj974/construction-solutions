import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryDisplayComponent } from './gallery-display/gallery-display.component';

@NgModule({
  declarations: [GalleryMainComponent, GalleryDisplayComponent],
  imports: [CommonModule, GalleryRoutingModule, SharedModule],
})
export class GalleryModule {}
