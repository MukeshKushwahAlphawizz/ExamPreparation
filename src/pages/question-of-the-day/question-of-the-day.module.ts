import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionOfTheDayPage } from './question-of-the-day';

@NgModule({
  declarations: [
    QuestionOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionOfTheDayPage),
  ],
})
export class QuestionOfTheDayPageModule {}
