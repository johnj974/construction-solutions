import { Injectable } from '@angular/core';
import { SkillsModel } from '../models/skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  //.
  skillsServiceArray: SkillsModel[] = [
    new SkillsModel(
      'Residential',
      'We offer an extensive range of services for residential projects which range from single room design to complete home redesigns.',
      '../../assets/images/upstairs.jpg'
    ),
    new SkillsModel(
      'Commercial',
      'We provide an exceptional Building Maintenance service for many customers in retail, commercial and residential areas',
      '../../assets/images/building.jpg'
    ),
    new SkillsModel(
      'Decking',
      'We specialize in creating high-performing, low maintenance, beautiful outdoor spaces for our customers.',
      '../../assets/images/finish-deck.jpg'
    ),
    new SkillsModel(
      'Interior',
      'We offer an extensive interior carpentry service catering to everything from single interior design to complete interior refurbishment',
      '../../assets/images/blue-stairs.jpg'
    ),
  ];

  getSkillsArray() {
    return this.skillsServiceArray.slice();
  }

  constructor() {}
}
