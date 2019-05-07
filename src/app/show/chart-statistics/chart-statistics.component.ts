import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartStatisticsService } from '../shared/service/chart-statistics.service';
import { ChartInputModel } from '../shared/model/chart-input-model';
import { Observable } from 'rxjs/Observable';
import { WatchStatusModel } from '../shared/model/watch-status-model';

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

    public statusCountInput: ChartInputModel;
    public favoritesInput: ChartInputModel;
    public genreNetworkInput : ChartInputModel;

    constructor(private statisticsService: ChartStatisticsService) { }

    ngOnInit() {
        this.initializeStatusCountChart();
        this.initializeFavoritesByNetworkChart();
        this.initializeGenreBasedNetworkData();
    }

    private initializeStatusCountChart(): void {
        this.statusCountInput = new ChartInputModel();
        this.statusCountInput.chartId = 'status-count';
        this.statusCountInput.chartTitle = 'Show Count by Watched Status';
        this.statusCountInput.seriesName = 'Shows';
        this.statusCountInput.data = this.statisticsService.getWatchStatusCount();
    }

    private initializeFavoritesByNetworkChart() : void {
        this.favoritesInput = new ChartInputModel();
        this.favoritesInput.chartId = 'favorite-by-network';
        this.favoritesInput.chartTitle = 'Favorites By Network';
        this.favoritesInput.seriesName = 'Favorites';
        this.favoritesInput.data = this.statisticsService.getFavoritesByNetwork();
    }

    private initializeGenreBasedNetworkData() : void {
        // this.genreNetworkInput = new ChartInputModel();
        // this.genreNetworkInput.chartId = 'genre-network-data';
        // this.genreNetworkInput.chartTitle = 'Genre based Network Data';
        // this.genreNetworkInput.chartSubtitle = 'How networks fare across genres';
        //this.statisticsService.getGenreBasedNetworkData().subscribe(data => console.log(data));
    }
}
