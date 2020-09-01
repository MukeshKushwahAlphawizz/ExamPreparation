import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QotdMetricsPage } from './qotd-metrics';

@NgModule({
  declarations: [
    QotdMetricsPage,
  ],
  imports: [
    IonicPageModule.forChild(QotdMetricsPage),
  ],
})
export class QotdMetricsPageModule {}
