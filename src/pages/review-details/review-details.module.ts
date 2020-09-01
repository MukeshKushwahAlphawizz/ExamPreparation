import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewDetailsPage } from './review-details';

@NgModule({
  declarations: [
    ReviewDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewDetailsPage),
  ],
})
export class ReviewDetailsPageModule {}
