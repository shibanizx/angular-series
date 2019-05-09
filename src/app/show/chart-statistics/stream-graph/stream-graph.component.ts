import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartInputModel } from '../../shared/model/chart-input-model';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let stream = require('highcharts/modules/streamgraph');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
stream(Highcharts);

@Component({
  selector: 'app-stream-graph',
  templateUrl: './stream-graph.component.html',
  styleUrls: ['./stream-graph.component.css']
})
export class StreamGraphComponent implements OnInit {

  @Input() chartInput: ChartInputModel;

  public options: any = {
    chart: {
      type: 'streamgraph',
      marginBottom: 30,
      zoomType: 'x'
    },
    colors: [],
    title: {
      floating: true,
      align: 'left',
      text: ''
    },
    subtitle: {
      floating: true,
      align: 'left',
      y: 30,
      text: ''
    },
    xAxis: {
      maxPadding: 0,
      type: 'category',
      crosshair: true,
      categories: [],
      labels: {
        align: 'left',
        reserveSpace: true,
        rotation: 270
      },
      lineWidth: 0,
      margin: 20,
      tickWidth: 0
    },
    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false,
      max: 30,
      min: -40
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        label: {
          minFontSize: 5,
          maxFontSize: 15,
          style: {
            color: 'rgba(255,255,255,0.75)'
          }
        }
      }
    },
    series: []
  };

  constructor() { }

  ngOnInit() {

    this.options.title.text = this.chartInput.chartTitle;
    this.options.subtitle.text = this.chartInput.chartSubtitle;

    this.chartInput.data.subscribe(data => {
      this.options.xAxis.categories = data.genreData;
      data.networkData.forEach(row => {
        this.options.colors.push(row.colorCode);
        this.options.series.push({
          name: row.productionHouse,
          data: row.genreCountList
        });
      });
      Highcharts.chart(this.chartInput.chartId, this.options);
    });

  }

}
