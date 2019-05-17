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

    if (filterOptions == null
      || (!filterOptions.isFavorite
        && !filterOptions.isEnded
        && filterOptions.productionHouse.length == 0
        && filterOptions.onlineChannel.length == 0
        && filterOptions.language.length == 0
        && filterOptions.watchStatus.length == 0
        && filterOptions.ratings.length == 0))
      return shows;

    if (filterOptions.isFavorite != null && filterOptions.isFavorite) {
      filters = filters.concat(shows.filter(s => s.favorite));
      isFiltered = true;
    }

    if (filterOptions.isEnded != null && filterOptions.isEnded) {
      filters = filters.length == 0 && !isFiltered
        ? filters.concat(shows.filter(s => s.ended))
        : new Array<ShowModel>().concat(filters.filter(s => s.ended));
      isFiltered = true;
    }

    if (filterOptions.productionHouse.length > 0) {
      filters = filters.length == 0 && !isFiltered
        ? filters.concat(shows.filter(s => filterOptions.productionHouse.includes(s.productionHouse.productionHouseId)))
        : new Array<ShowModel>().concat(filters.filter(s => filterOptions.productionHouse.includes(s.productionHouse.productionHouseId)));
      isFiltered = true;
    }

    if (filterOptions.watchStatus.length > 0) {
      filters = filters.length == 0 && !isFiltered
        ? filters.concat(shows.filter(s => filterOptions.watchStatus.includes(s.watchStatus.watchStatusId)))
        : new Array<ShowModel>().concat(filters.filter(s => filterOptions.watchStatus.includes(s.watchStatus.watchStatusId)));
      isFiltered = true;
    }

    if (filterOptions.language.length > 0) {
      filters = filters.length == 0 && !isFiltered
        ? filters.concat(shows.filter(s => filterOptions.language.includes(s.language.languageId)))
        : new Array<ShowModel>().concat(filters.filter(s => filterOptions.language.includes(s.language.languageId)));
      isFiltered = true;
    }

    if (filterOptions.onlineChannel.length > 0) {
      filters = filters.length == 0 && !isFiltered
        ? filters.concat(shows.filter(s => filterOptions.onlineChannel.includes(s.onlineChannel.onlineChannelId)))
        : new Array<ShowModel>().concat(filters.filter(s => filterOptions.onlineChannel.includes(s.onlineChannel.onlineChannelId)));
      isFiltered = true;
    }

    return filters;
  }

}
