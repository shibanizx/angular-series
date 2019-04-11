import { Injectable } from '@angular/core';
import { GenreModel } from '../model/genre-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GenreService {

  rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = "http://localhost:23442/";
  }

  getGenreList() : Observable<Array<GenreModel>> {

    return this.http.get<Array<GenreModel>>(this.rootUrl + 'api/Genre');
  }
}
