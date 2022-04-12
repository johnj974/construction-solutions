import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css'],
})
export class SkillsListComponent implements OnInit {
  //.
  retrievedSkillsArray = [];

  toSingleService(serviceName: string, id: number) {
    this.router.navigate([serviceName, id], { relativeTo: this.route });
  }

  constructor(
    private skillsService: SkillsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.retrievedSkillsArray = this.skillsService.getSkillsArray();
  }
}
