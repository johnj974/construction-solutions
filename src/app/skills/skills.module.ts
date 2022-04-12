import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsMainComponent } from './skills-main/skills-main.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillDisplayComponent } from './skill-display/skill-display.component';

@NgModule({
  declarations: [SkillsMainComponent, SkillsListComponent, SkillDisplayComponent],
  imports: [CommonModule, SkillsRoutingModule, SharedModule],
})
export class SkillsModule {}
