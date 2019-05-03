import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartStatisticsService } from '../shared/service/chart-statistics.service';
import { WatchStatusCount } from '../shared/model/watch-status-count';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
    selector: 'app-chart-statistics',
    templateUrl: './chart-statistics.component.html',
    styleUrls: ['./chart-statistics.component.css']
})
export class ChartStatisticsComponent implements OnInit {

    public options: any = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            type: 'pie',
        },
        title: {
            text: 'Show Count by Watched Status'
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
            name: 'Shows',
            colorByPoint: true,
            type: 'pie',
            data: []
        }]
    }

    private renderName : string = 'container';

    constructor(private statisticsService: ChartStatisticsService) { }

    ngOnInit() {        
        this.statisticsService.getWatchStatusCount().subscribe(data => {
            data.forEach(row => {
                this.options.series[0].data.push({
                    name : row.status,
                    y : row.showCount,
                    color : row.colorCode
                })
            });
            Highcharts.chart(this.renderName, this.options);
            Highcharts.chart('container2', this.options);
        });  
        
        console.log(this.options);
    }
}
