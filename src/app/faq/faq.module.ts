import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqMainComponent } from './faq-main/faq-main.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FaqMainComponent],
  imports: [CommonModule, FaqRoutingModule, SharedModule],
})
export class FaqModule {}
