import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';


const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32, 14, 46, 13, 55], label: 'Sentiment Analysis'},
  {data: [12, 15, 44, 12, 33], label: 'Image Recognition'},
  {data: [56, 23, 46, 7, 18], label: 'Forecasting'},
];

const LINE_CHART_LABELS: string [] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit() {
  }

}
