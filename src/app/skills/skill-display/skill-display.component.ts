import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsModel } from 'src/app/models/skills.model';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skill-display',
  templateUrl: './skill-display.component.html',
  styleUrls: ['./skill-display.component.css'],
})
export class SkillDisplayComponent implements OnInit {
  //.
  receivedSkill: SkillsModel;

  toServicesPage() {
    this.router.navigate(['services']);
  }

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data.id);
      this.receivedSkill = this.skillsService.getSingleSkill(data.id);
    });
  }
}
