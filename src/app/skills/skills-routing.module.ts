import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillDisplayComponent } from './skill-display/skill-display.component';
import { SkillsMainComponent } from './skills-main/skills-main.component';

const routes: Routes = [
  { path: '', component: SkillsMainComponent },
  { path: ':skill/:id', component: SkillDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
