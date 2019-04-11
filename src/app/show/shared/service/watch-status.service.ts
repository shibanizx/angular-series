import { Injectable } from '@angular/core';
import { WatchStatusModel } from '../model/watch-status-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WatchStatusService {

  rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = "http://localhost:23442/";
  }

  getWatchStatusList() : Observable<Array<WatchStatusModel>> {

    return this.http.get<Array<WatchStatusModel>>(this.rootUrl + 'api/watchStatus');
  }
}
