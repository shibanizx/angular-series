import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AudioLanguageModel } from '../model/audio-language-model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AudioLanguageService {

  rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = "http://localhost:23442/";
  }

  getLanguageList() : Observable<Array<AudioLanguageModel>> {

    return this.http.get<Array<AudioLanguageModel>>(this.rootUrl + 'api/audioLanguage');
  }
}
