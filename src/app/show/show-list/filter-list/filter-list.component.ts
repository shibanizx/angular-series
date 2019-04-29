import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AudioLanguageModel } from '../../shared/model/audio-language-model';
import { OnlineChannelModel } from '../../shared/model/online-channel-model';
import { WatchStatusModel } from '../../shared/model/watch-status-model';
import { ProductionHouseModel } from '../../shared/model/production-house-model';
import { OnlineChannelService } from '../../shared/service/online-channel.service';
import { WatchStatusService } from '../../shared/service/watch-status.service';
import { AudioLanguageService } from '../../shared/service/audio-language.service';
import { ProductionHouseService } from '../../shared/service/production-house.service';
import { FilterModel } from '../../shared/model/filter-model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css'],
  providers: [
    ProductionHouseService,
    WatchStatusService,
    AudioLanguageService,
    OnlineChannelService
  ]
})
export class FilterListComponent implements OnInit {

  private filterOptions: FilterModel;

  private languageList: Array<AudioLanguageModel>;
  private channelList: Array<OnlineChannelModel>;
  private statusList: Array<WatchStatusModel>;
  private productionHouseList: Array<ProductionHouseModel>;

  @Output() selectedFilter: EventEmitter<FilterModel>;

  constructor(
    private channelService: OnlineChannelService,
    private languageService: AudioLanguageService,
    private statusService: WatchStatusService,
    private productionHouseService: ProductionHouseService) {

    this.filterOptions = new FilterModel();
    this.selectedFilter = new EventEmitter();

    this.getWatchStatuses();
    this.getOnlineChannels();
    this.getProductionHouses();
    this.getLanguages();
  }

  ngOnInit() { }

  getWatchStatuses(): void {
    this.statusService.getWatchStatusList().subscribe(status => {
      this.statusList = status;
    });
  }

  getOnlineChannels(): void {
    this.channelService.getOnlineChannelList().subscribe(channel => {
      this.channelList = channel;
    })
  }

  getProductionHouses(): void {
    this.productionHouseService.getProductionHouseList().subscribe(productionHouse => {
      this.productionHouseList = productionHouse;
    });
  }

  getLanguages(): void {
    this.languageService.getLanguageList().subscribe(language => {
      this.languageList = language;
    });
  }

  applyFilter(): void {
    //this.selectedFilter.emit(this.filterOptions);
    this.filterOptions.watchStatus = this.statusList.filter(s => s.checked);
    this.filterOptions.productionHouse = this.productionHouseList.filter(p => p.checked);
    this.filterOptions.onlineChannel = this.channelList.filter(c => c.checked);
    this.filterOptions.language = this.languageList.filter(l => l.checked);    
  }

  clearFilter(): void {
    this.filterOptions = new FilterModel();
    this.applyFilter();
  }

}
