import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartInputModel } from '../../shared/model/chart-input-model';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() chartInput: ChartInputModel;

  public options: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: true,
      type: 'pie',
      renderTo: ''
    },
    title: {
      text: '',
      margin: 0
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y}',
          style: {
            color: '{point.color}'
          }
        }
      }
    },
    series: [{
      name: '',
      colorByPoint: true,
      type: 'pie',
      data: []
    }]
  }

  constructor() { }

  ngOnInit() {

    this.options.chart.renderTo = this.chartInput.chartId;
    this.options.series[0].name = this.chartInput.seriesName;
    this.options.title.text = this.chartInput.chartTitle;

    switch (this.chartInput.chartId) {
      case 'status-count': {
        this.chartInput.data.subscribe(data => {
          data.forEach(row => {
            this.options.series[0].data.push({
              name: row.watchStatus,
              y: row.showCount,
              color: row.colorCode
            })
          })
          Highcharts.chart(this.chartInput.chartId, this.options);
        });
        break;
      }
      case 'favorite-by-network': {
        this.chartInput.data.subscribe(data => {
          data.forEach(row => {
            this.options.series[0].data.push({
              name: row.productionHouse,
              y: row.favoriteCount,
              color: row.colorCode
            })
          })
          Highcharts.chart(this.chartInput.chartId, this.options);
        });
        break;
      }
      default: {
        break;
      }
    }
  }

}
