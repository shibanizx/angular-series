import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartInputModel } from '../../shared/model/chart-input-model';
import { NetworkData } from '../../shared/model/genre-network-data';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-packed-bubble',
  templateUrl: './packed-bubble.component.html',
  styleUrls: ['./packed-bubble.component.css']
})
export class PackedBubbleComponent implements OnInit {

  @Input() chartInput : ChartInputModel;

  public options : any = 
    {
      chart: {
          type: 'packedbubble',
          height: '75%'
      },
      title: {
          text: ''
      },
      tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.y} Episodes'
      },
      plotOptions: {
          packedbubble: {
              minSize: '30%',
              maxSize: '120%',
              zMin: 0,
              zMax: 50,
              layoutAlgorithm: {
                  splitSeries: false,
                  gravitationalConstant: 0.02
              },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  filter: {
                      property: 'y',
                      operator: '>',
                      value: 120
                  },
                  style: {
                      color: 'black',
                      textOutline: 'none',
                      fontWeight: 'normal'
                  }
              }
          }
      },
      series: []  
  }

  constructor() { }

  ngOnInit() {

    let i = 0;
    this.options.title.text = this.chartInput.chartTitle;    

    this.chartInput.data.subscribe(data => {

      data.forEach(row => {
        this.options.series.push({
          name : row.productionHouse,
          color : row.colorCode,
          data : []
        })
        row.showList.forEach(cell => {
          this.options.series[i].data.push({
            name : cell.showName,
            value : cell.totalEpisodes
          })
        })
        i++;
      });

      Highcharts.chart(this.chartInput.chartId, this.options);
    });

  }

}
