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
      'Complete Residential Projects Undertaken',
      '../../assets/images/upstairs.jpg',
      [
        'Fitted Kitchens',
        'Flooring',
        'Loft Conversions',
        'Doors',
        'Wardrobes',
        'Seating',
        'Alcove Units',
        'Wall Panelling',
      ]
    ),
    new SkillsModel(
      'Commercial',
      'We provide an exceptional Building Maintenance service for many customers in retail, commercial and residential areas',
      'Commited to our Commercial Partners',
      '../../assets/images/building.jpg',
      [
        'Reception Areas',
        'Wainscotting',
        'Interior Finishing',
        'Metal Framing',
        'Shuttering',
        'Shop Fronts',
      ]
    ),
    new SkillsModel(
      'Decking',
      'We specialize in creating high-performing, low maintenance, beautiful outdoor spaces for both commercial and residential projects.',
      'Quality Decking',
      '../../assets/images/finish-deck.jpg',
      [
        'Walkways',
        'Seating',
        'Side Gates',
        'Framing',
        'Elevated Decks',
        'Composite Decking',
        'Cedar Decking',
      ]
    ),
    new SkillsModel(
      'Interior',
      'We offer an extensive interior carpentry service catering to everything from single interior design to complete interior refurbishment',
      'Bespoke Interior Carpentry ',
      '../../assets/images/blue-stairs.jpg',
      [
        'Wardrobes',
        'Seating',
        'Alcove Units',
        'Wall Panelling',
        'Timber Flooring',
        'Hanging Doors',
        'Shelving',
      ]
    ),
  ];

  getSkillsArray() {
    return this.skillsServiceArray.slice();
  }

  getSingleSkill(index: number) {
    return this.skillsServiceArray[index];
  }

  constructor() {}
}
