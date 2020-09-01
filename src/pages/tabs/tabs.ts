import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = 'HomePage';
  tab2Root: any = 'PracticePage';
  tab3Root: any = 'HomePage';
  tab4Root: any = 'SettingPage';

  tab1Title = "Dashboard";
  tab2Title = "Practice";
  tab3Title = "Exam Readiness";
  tab4Title = "Setting";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    /*translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    });*/
  }
}
