import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqMainComponent } from './faq-main/faq-main.component';
import { SharedModule } from '../shared/shared.module';
import { FaqQuestionsComponent } from './faq-questions/faq-questions.component';

@NgModule({
  declarations: [FaqMainComponent, FaqQuestionsComponent],
  imports: [CommonModule, FaqRoutingModule, SharedModule],
})
export class FaqModule {}
