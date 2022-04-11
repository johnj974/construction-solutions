import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutMainComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
