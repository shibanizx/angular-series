import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RatingsModel } from '../model/ratings-model';

@Injectable()
export class RatingsService {
  
  rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = "http://localhost:23442/";
  }

  getRatingsList() : Observable<Array<RatingsModel>> {
    
    return this.http.get<Array<RatingsModel>>(this.rootUrl + 'api/Ratings');
  }
}
