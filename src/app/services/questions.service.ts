import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  //.
  faqArray: QuestionModel[] = [
    new QuestionModel(
      'collapseOne',
      'headingOne',
      'How long will I be waiting for a quote?',
      'Once we have come and inspected your property and scope of works involved, we will send you a quote within 3 days.'
    ),
    new QuestionModel(
      'collapseTwo',
      'headingTwo',
      'What area of London do you cover?',
      'Generally within the M25 but do travel outside of this with projects completed in Hertfordshire, Essex, Kent, Oxfordshire and Buckinghamshire.'
    ),
    new QuestionModel(
      'collapseThree',
      'headingThree',
      'How much notice do you require?',
      'Generally projects are signed up in a chronological order, ie you will be offered a start date based on availability. We pride ourselves on punctuality and any start date agreed is honoured'
    ),
    new QuestionModel(
      'collapseFour',
      'headingFour',
      'How long is a quote valid for?',
      'Quotes are valid for 30 days given the fluctuation in material cost we cannot offer longer quotes.'
    ),
    new QuestionModel(
      'collapseFive',
      'headingFive',
      'How much disruption will the job create',
      'This is dependent on the scope of works,  We will cut outside where possible and where it is not possible, we use dust extraction systems for all our cutting tools to keep associated dust with building works to the absolute minimum.'
    ),
  ];

  getFaqArray() {
    return this.faqArray.slice();
  }

  constructor() {}
}
