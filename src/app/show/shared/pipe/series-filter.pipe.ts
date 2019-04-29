import { Pipe, PipeTransform } from '@angular/core';
import { ShowModel } from '../model/show-model';
import { FilterModel } from '../model/filter-model';

@Pipe({
  name: 'seriesFilter'
})
export class SeriesFilterPipe implements PipeTransform {

  transform(shows: Array<ShowModel>, filterOptions: FilterModel): any {

    let filters = Array<ShowModel>();

    let isFiltered = false;

    // if (filterOptions == null
    //   || (!filterOptions.isFavorite
    //     && !filterOptions.isEnded
    //     && filterOptions.productionHouseId == null
    //     && filterOptions.onlineChannelId == null
    //     && filterOptions.languageId == null
    //     && filterOptions.watchStatusId == null))
      return shows;

    // if (filterOptions.isFavorite != null && filterOptions.isFavorite) {
    //   filters = filters.concat(shows.filter(s => s.favorite));
    //   isFiltered = true;
    // }

    // if (filterOptions.isEnded != null && filterOptions.isEnded) {
    //   filters = filters.length == 0 && !isFiltered
    //     ? filters.concat(shows.filter(s => s.ended))
    //     : new Array<ShowModel>().concat(filters.filter(s => s.ended));
    //   isFiltered = true;
    // }

    // if (filterOptions.productionHouseId != null) {
    //   filters = filters.length == 0 && !isFiltered
    //     ? filters.concat(shows.filter(s => s.productionHouse.productionHouseId == filterOptions.productionHouseId))
    //     : new Array<ShowModel>().concat(filters.filter(s => s.productionHouse.productionHouseId == filterOptions.productionHouseId));
    //   isFiltered = true;
    // }

    // if (filterOptions.watchStatusId != null) {
    //   filters = filters.length == 0 && !isFiltered
    //     ? filters.concat(shows.filter(s => s.watchStatus.watchStatusId == filterOptions.watchStatusId))
    //     : new Array<ShowModel>().concat(filters.filter(s => s.watchStatus.watchStatusId == filterOptions.watchStatusId));
    //   isFiltered = true;
    // }

    // if (filterOptions.languageId != null) {
    //   filters = filters.length == 0 && !isFiltered
    //     ? filters.concat(shows.filter(s => s.language.languageId == filterOptions.languageId))
    //     : new Array<ShowModel>().concat(filters.filter(s => s.language.languageId == filterOptions.languageId));
    //   isFiltered = true;
    // }

    // if (filterOptions.onlineChannelId != null) {
    //   filters = filters.length == 0 && !isFiltered
    //     ? filters.concat(shows.filter(s => s.onlineChannel.onlineChannelId == filterOptions.onlineChannelId))
    //     : new Array<ShowModel>().concat(filters.filter(s => s.onlineChannel.onlineChannelId == filterOptions.onlineChannelId));
    //   isFiltered = true;
    // }

    //return filters;

  }

}
