import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../shared/service/series.service';
import { GenreService } from '../shared/service/genre.service';
import { OnlineChannelService } from '../shared/service/online-channel.service';
import { AudioLanguageService } from '../shared/service/audio-language.service';
import { WatchStatusService } from '../shared/service/watch-status.service';
import { GenreModel } from '../shared/model/genre-model';
import { AudioLanguageModel } from '../shared/model/audio-language-model';
import { OnlineChannelModel } from '../shared/model/online-channel-model';
import { WatchStatusModel } from '../shared/model/watch-status-model';
import { ProductionHouseService } from '../shared/service/production-house.service';
import { ProductionHouseModel } from '../shared/model/production-house-model';
import { ShowModel } from '../shared/model/show-model';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css'],
  providers: [
    GenreService,
    ProductionHouseService,
    WatchStatusService,
    AudioLanguageService,
    OnlineChannelService
  ]
})
export class AddShowComponent implements OnInit {

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
  
  constructor(
    private genreService : GenreService,
    private channelService : OnlineChannelService,
    private languageService : AudioLanguageService,
    private statusService : WatchStatusService,
    private productionHouseService : ProductionHouseService,
    private seriesService : SeriesService
  ) { 
    
    this.initializeModel();
    this.getGenres();
    this.getWatchStatuses();
    this.getOnlineChannels();
    this.getProductionHouses();
    this.getLanguages();
  }

  ngOnInit() {  }

  initializeModel() : void {
    this.show = new ShowModel();
    this.show.productionHouse = new ProductionHouseModel();
    this.show.onlineChannel = new OnlineChannelModel();
    this.show.watchStatus = new WatchStatusModel();
    this.show.language = new AudioLanguageModel();

    this.alertMessage = '';
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
  
  submitShow() : void {
    this.show.addedOn = this.show.modifiedOn;
    this.seriesService.addShow(this.show).subscribe(message => this.alertMessage = message);
  }
}
