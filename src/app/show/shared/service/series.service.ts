import { Injectable } from '@angular/core';
import { ShowModel } from '../model/show-model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AudioLanguageModel } from '../model/audio-language-model';
import { OnlineChannelModel } from '../model/online-channel-model';
import { WatchStatusModel } from '../model/watch-status-model';
import { ProductionHouseModel } from '../model/production-house-model';

@Injectable()
export class SeriesService {

  private rootUrl : string;

  public show : ShowModel;

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) }; 

  constructor(private http : HttpClient) { 
    
    this.rootUrl = "http://localhost:23442/api/series";
  }

  public initializeModel() : void {
    this.show = new ShowModel();
    this.show.productionHouse = new ProductionHouseModel();
    this.show.onlineChannel = new OnlineChannelModel();
    this.show.watchStatus = new WatchStatusModel();
    this.show.language = new AudioLanguageModel();
  }

  public updateShow(showId: string, show : ShowModel) : Observable<string> {
    let jsonString : string = JSON.stringify(show);
    return this.http.put<string>(this.rootUrl + "?showId=" + showId, jsonString, this.httpOptions);
  }

  public deleteShow(showId : string) : boolean {
    return true;
  }

  public addShow(show : ShowModel) : Observable<string> {
    let jsonString : string = JSON.stringify(show);
    return this.http.post<string>(this.rootUrl, jsonString, this.httpOptions);
  }

  public getShows() : Observable<Array<ShowModel>> {
    return this.http.get<Array<ShowModel>>(this.rootUrl);
  }
}
