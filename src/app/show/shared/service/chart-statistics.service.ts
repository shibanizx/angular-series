import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GenreNetworkData, NetworkData } from '../model/genre-network-data';
import { WatchStatusModel } from '../model/watch-status-model';
import { ProductionHouseModel } from '../model/production-house-model';

@Injectable()
export class ChartStatisticsService {

  private rootUrl : string;

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 

  constructor(private http : HttpClient) { 
    
    this.rootUrl = "http://localhost:23442/api/statistics/";
  }

  public getWatchStatusCount() : Observable<Array<WatchStatusModel>> {
    return this.http.get<Array<WatchStatusModel>>(this.rootUrl + "statusCount");
  }

  public getFavoritesByNetwork() : Observable<Array<ProductionHouseModel>> {
    return this.http.get<Array<ProductionHouseModel>>(this.rootUrl + "favoritesByNetwork");
  }

  public getGenreBasedNetworkData() : Observable<GenreNetworkData> {
    return this.http.get<GenreNetworkData>(this.rootUrl + "genreBasedNetworkData");
  }

  public getNetworkBasedEpisodeData() : Observable<Array<NetworkData>> {
    return this.http.get<Array<NetworkData>>(this.rootUrl + "networkBasedEpisodeData");
  }

}
