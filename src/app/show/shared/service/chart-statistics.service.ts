import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WatchStatusCount } from '../model/watch-status-count';
import { FavoritesByNetwork } from '../model/favorites-by-network';

@Injectable()
export class ChartStatisticsService {

  private rootUrl : string;

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 

  constructor(private http : HttpClient) { 
    
    this.rootUrl = "http://localhost:23442/api/statistics/";
  }

  public getWatchStatusCount() : Observable<Array<WatchStatusCount>> {
    return this.http.get<Array<WatchStatusCount>>(this.rootUrl + "statusCount");
  }

  public getFavoritesByNetwork() : Observable<Array<FavoritesByNetwork>> {
    return this.http.get<Array<FavoritesByNetwork>>(this.rootUrl + "favoritesByNetwork");
  }

}
