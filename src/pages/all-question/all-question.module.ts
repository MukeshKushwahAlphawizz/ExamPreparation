import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllQuestionPage } from './all-question';

@NgModule({
  declarations: [
    AllQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(AllQuestionPage),
  ],
})
export class AllQuestionPageModule {}
