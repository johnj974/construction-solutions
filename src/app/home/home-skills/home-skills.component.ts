import { Component, OnInit } from '@angular/core';
import { SkillsModel } from 'src/app/models/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.css'],
})
export class HomeSkillsComponent implements OnInit {
  //.
  serviceProvidedArray = [];
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.serviceProvidedArray = this.skillsService.getSkillsArray();
  }
}
