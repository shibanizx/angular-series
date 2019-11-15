import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';

import { ShowListComponent } from './show-list/show-list.component';
import { ShowComponent } from './show.component';
import { SeriesService } from './shared/service/series.service';
import { ShowListItemComponent } from './show-list/show-list-item/show-list-item.component';
import { SeriesFilterPipe } from './shared/pipe/series-filter.pipe';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AddShowComponent } from './add-show/add-show.component';
import { RemoveSpacesPipe } from './shared/pipe/remove-spaces.pipe';
import { EditShowComponent } from './edit-show/edit-show.component';
import { FilterListComponent } from './show-list/filter-list/filter-list.component';
import { ChartStatisticsComponent } from './chart-statistics/chart-statistics.component';
import { RatingsService } from './shared/service/ratings.service';
import { ProductionHouseService } from './shared/service/production-house.service';
import { OnlineChannelService } from './shared/service/online-channel.service';
import { AudioLanguageService } from './shared/service/audio-language.service';
import { WatchStatusService } from './shared/service/watch-status.service';
import { GenreService } from './shared/service/genre.service';
import { ChartStatisticsService } from './shared/service/chart-statistics.service';
import { PieChartComponent } from './chart-statistics/pie-chart/pie-chart.component';
import { StreamGraphComponent } from './chart-statistics/stream-graph/stream-graph.component';
import { PackedBubbleComponent } from './chart-statistics/packed-bubble/packed-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule,
    NgxPaginationModule
  ],
  exports : [
    ShowComponent,
    SeriesFilterPipe,
    RemoveSpacesPipe
  ],
  declarations: [
    ShowListComponent,
    ShowComponent,
    ShowListItemComponent,
    SeriesFilterPipe,
    RemoveSpacesPipe,
    AddShowComponent,
    RemoveSpacesPipe,
    EditShowComponent,
    FilterListComponent,
    ChartStatisticsComponent,
    PieChartComponent,
    StreamGraphComponent,
    PackedBubbleComponent
  ],
  providers: [ 
    SeriesService,
    RatingsService,
    ProductionHouseService,
    OnlineChannelService,
    AudioLanguageService,
    WatchStatusService,
    GenreService,
    ChartStatisticsService
  ]
})
export class ShowModule { }
