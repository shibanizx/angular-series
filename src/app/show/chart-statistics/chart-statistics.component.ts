import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartStatisticsService } from '../shared/service/chart-statistics.service';
import { WatchStatusCount } from '../shared/model/watch-status-count';
import { PieChartInputModel } from '../shared/model/pie-chart-input-model';

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

    public statusCountInput: PieChartInputModel;
    public favoritesInput: PieChartInputModel;

    constructor(private statisticsService: ChartStatisticsService) { }

    ngOnInit() {
        this.initializeStatusCountChart();
        this.initializeFavoritesByNetworkChart();
    }

    private initializeStatusCountChart(): void {
        this.statusCountInput = new PieChartInputModel();
        this.statusCountInput.chartId = 'status-count';
        this.statusCountInput.chartTitle = 'Show Count by Watched Status';
        this.statusCountInput.seriesName = 'Shows';
        this.statusCountInput.data = this.statisticsService.getWatchStatusCount();
    }

    private initializeFavoritesByNetworkChart() : void {
        this.favoritesInput = new PieChartInputModel();
        this.favoritesInput.chartId = 'favorite-by-network';
        this.favoritesInput.chartTitle = 'Favorites By Network';
        this.favoritesInput.seriesName = 'Favorites';
        this.favoritesInput.data = this.statisticsService.getFavoritesByNetwork();
    }

}
