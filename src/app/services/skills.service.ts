import { Injectable } from '@angular/core';
import { SkillsModel } from '../models/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  //.
  skillsServiceArray: SkillsModel[] = [
    new SkillsModel('Residential', 'Residential', 'Residential'),
    new SkillsModel('Commercial', 'Commercial', 'Commercial'),
    new SkillsModel('Decking', 'Decking', 'Decking'),
    new SkillsModel('Interior', 'Interior', 'Interior'),
  ];

  getSkillsArray() {
    return this.skillsServiceArray.slice();
  }

  constructor() {}
}
