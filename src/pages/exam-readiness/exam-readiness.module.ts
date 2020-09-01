import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamReadinessPage } from './exam-readiness';
import {NgCircleProgressModule} from "ng-circle-progress";

@NgModule({
  declarations: [
    ExamReadinessPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamReadinessPage),
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "clockwise": true,
    })
  ],
})
export class ExamReadinessPageModule {}
