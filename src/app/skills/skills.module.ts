import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainComponent } from './skills-main/skills-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkillsMainComponent],
  imports: [CommonModule, SkillsRoutingModule, SharedModule],
})
export class SkillsModule {}
