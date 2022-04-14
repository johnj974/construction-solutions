import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-faq-questions',
  templateUrl: './faq-questions.component.html',
  styleUrls: ['./faq-questions.component.css'],
})
export class FaqQuestionsComponent implements OnInit {
  //.
  questionsArray = [];
  toggle = false;

  toggleView(data) {
    this.toggle = !this.toggle;
  }

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsArray = this.questionsService.getFaqArray();
  }
}
