import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../shared/service/series.service';
import { ShowModel } from '../shared/model/show-model';
import { FilterModel } from '../shared/model/filter-model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  private shows : Array<ShowModel>;
  
  private filterOptions : FilterModel;
  
  constructor(private seriesService : SeriesService) { }

  ngOnInit() {
    this.getShowList();
  }

  public getShowList() : void {
    this.seriesService.getShows().subscribe(showList => this.shows = showList);
  }

  public editShow(show : ShowModel) : void {
    this.seriesService.show = show;
  }

  public filterList(filterOptions: FilterModel) : void {
    this.filterOptions = filterOptions;
    this.shows = [...this.shows];
  }
}
