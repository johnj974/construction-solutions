import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutMainComponent } from './about-main/about-main.component';
import { SharedModule } from '../shared/shared.module';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { AboutStatsComponent } from './about-stats/about-stats.component';

@NgModule({
  declarations: [AboutMainComponent, AboutIntroComponent, AboutStatsComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
