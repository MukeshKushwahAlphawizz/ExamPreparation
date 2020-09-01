import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionStatusTabPage } from './question-status-tab';

@NgModule({
  declarations: [
    QuestionStatusTabPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionStatusTabPage),
  ],
})
export class QuestionStatusTabPageModule {}
