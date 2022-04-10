import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqMainComponent } from './faq-main/faq-main.component';

const routes: Routes = [{ path: '', component: FaqMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
