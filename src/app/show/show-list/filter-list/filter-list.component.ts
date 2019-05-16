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

  private getWatchStatuses(): void {
    this.statusService.getWatchStatusList().subscribe(status => {
      this.statusList = status;
    });
  }

  private getOnlineChannels(): void {
    this.channelService.getOnlineChannelList().subscribe(channel => {
      this.channelList = channel;
    })
  }

  private getProductionHouses(): void {
    this.productionHouseService.getProductionHouseList().subscribe(productionHouse => {
      this.productionHouseList = productionHouse;
    });
  }

  private getLanguages(): void {
    this.languageService.getLanguageList().subscribe(language => {
      this.languageList = language;
    });
  }

  public applyFilter(): void {
    this.filterOptions.watchStatus = this.statusList.filter(s => s.checked).map(t => t.watchStatusId);
    this.filterOptions.productionHouse = this.productionHouseList.filter(p => p.checked).map(t=> t.productionHouseId);
    this.filterOptions.onlineChannel = this.channelList.filter(c => c.checked).map(t => t.onlineChannelId);
    this.filterOptions.language = this.languageList.filter(l => l.checked).map(t => t.languageId);
    
    this.selectedFilter.emit(this.filterOptions);
  }

  public clearFilter(): void {
    this.filterOptions = new FilterModel();

    this.productionHouseList.map(p => p.checked = false);
    this.statusList.map(s => s.checked = false);
    this.languageList.map(l => l.checked = false);
    this.channelList.map(c => c.checked = false);

    this.applyFilter();
  }
}
