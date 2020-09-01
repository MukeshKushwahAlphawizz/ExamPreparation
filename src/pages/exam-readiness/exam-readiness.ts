import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from "chart.js";


@IonicPage()
@Component({
  selector: 'page-exam-readiness',
  templateUrl: 'exam-readiness.html',
})
export class ExamReadinessPage {
  @ViewChild("barCanvas") barCanvas: ElementRef;
  private barChart: Chart;

  color: any = '#1DBF73';
  subtitleCorrectColor: any = '#4988A6';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["12/05/2020", "14/05/2020","15/05/2020", "18/05/2020","19/05/2020", "23/05/2020","24/05/2020", "25/05/2020","27/05/2020", "30/05/2020",],
        datasets: [
          {
            label: "Average Correct",
            maxBarThickness: 15,
            minBarLength: 2,
            data: [50, 60, 20, 25, 36, 45, 55, 20, 12, 18],
            backgroundColor: [
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
            ],
            borderColor: [
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
              "#43BF73",
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }


}
