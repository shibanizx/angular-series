import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule
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
    FilterListComponent
  ],
  providers: [ 
    SeriesService
  ]
})
export class ShowModule { }
