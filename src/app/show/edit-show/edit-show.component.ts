import { Component, OnInit, Input } from '@angular/core';
import { ShowModel } from '../shared/model/show-model';
import { SeriesService } from '../shared/service/series.service';
import { GenreService } from '../shared/service/genre.service';
import { OnlineChannelService } from '../shared/service/online-channel.service';
import { AudioLanguageService } from '../shared/service/audio-language.service';
import { WatchStatusService } from '../shared/service/watch-status.service';
import { ProductionHouseService } from '../shared/service/production-house.service';
import { GenreModel } from '../shared/model/genre-model';
import { AudioLanguageModel } from '../shared/model/audio-language-model';
import { OnlineChannelModel } from '../shared/model/online-channel-model';
import { WatchStatusModel } from '../shared/model/watch-status-model';
import { ProductionHouseModel } from '../shared/model/production-house-model';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingsService } from '../shared/service/ratings.service';
import { RatingsModel } from '../shared/model/ratings-model';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {

  private show : ShowModel;

  private dropdownSettings = {
    singleSelection: false,
    idField: 'genreId',
    textField: 'genre',
    allowSearchFilter: true,
    enableCheckAll: false
  };

  private alertMessage : string;

  private genreList : Array<GenreModel>;
  private languageList : Array<AudioLanguageModel>;
  private channelList : Array<OnlineChannelModel>;
  private statusList : Array<WatchStatusModel>;
  private productionHouseList : Array<ProductionHouseModel>;
  private ratingsList : Array<RatingsModel>;

  constructor(private genreService : GenreService,
    private channelService : OnlineChannelService,
    private languageService : AudioLanguageService,
    private statusService : WatchStatusService,
    private productionHouseService : ProductionHouseService,
    private seriesService : SeriesService,
    private ratingsService : RatingsService,
    private route: Router) 
    { }

  ngOnInit() {
    this.getGenres();
    this.getWatchStatuses();
    this.getOnlineChannels();
    this.getProductionHouses();
    this.getLanguages();
    this.getRatings();
    this.initializeShow();

    if(isNullOrUndefined(this.show))
      this.route.navigate(['/showList']);

    this.alertMessage = '';
  }

  initializeShow() : void {
    this.show = this.seriesService.show;
  }

  getGenres() : void {
    this.genreService.getGenreList().subscribe(genre => {
      this.genreList = genre;
    });
  }

  getWatchStatuses() : void {
    this.statusService.getWatchStatusList().subscribe(status => {
      this.statusList = status;
    });
  }

  getOnlineChannels() : void {
    this.channelService.getOnlineChannelList().subscribe(channel => {
      this.channelList = channel;
    })
  }

  getProductionHouses() : void {
    this.productionHouseService.getProductionHouseList().subscribe(productionHouse => {
      this.productionHouseList = productionHouse;
    });
  }

  getLanguages() : void {
    this.languageService.getLanguageList().subscribe(language => {
      this.languageList = language;
    });
  }

  getRatings() : void {
    this.ratingsService.getRatingsList().subscribe(rating => {
      this.ratingsList = rating;
    });
  }

  updateShow(showId : string) : void {
    this.show.modifiedOn = Date.now();

    this.seriesService.updateShow(showId, this.show).subscribe(message => this.alertMessage = message);
    this.route.navigate(['/showList']);
  }
}
