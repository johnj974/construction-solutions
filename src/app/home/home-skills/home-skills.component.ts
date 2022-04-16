import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  toSingleService(serviceName, serviceId) {
    this.router.navigate(['/services', serviceName, serviceId]);
  }
  constructor(private skillsService: SkillsService, private router: Router) {}

  ngOnInit(): void {
    this.serviceProvidedArray = this.skillsService.getSkillsArray();
  }
}
