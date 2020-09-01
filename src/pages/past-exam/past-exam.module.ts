import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastExamPage } from './past-exam';

@NgModule({
  declarations: [
    PastExamPage,
  ],
  imports: [
    IonicPageModule.forChild(PastExamPage),
  ],
})
export class PastExamPageModule {}
