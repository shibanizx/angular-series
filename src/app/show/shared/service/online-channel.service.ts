import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnlineChannelModel } from '../model/online-channel-model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OnlineChannelService {

  rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = "http://localhost:23442/";
  }

  getOnlineChannelList() : Observable<Array<OnlineChannelModel>> {

    return this.http.get<Array<OnlineChannelModel>>(this.rootUrl + 'api/onlineChannel');
  }
}
