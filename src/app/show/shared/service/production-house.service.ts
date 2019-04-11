import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProductionHouseModel } from '../model/production-house-model';

@Injectable()
export class ProductionHouseService {
  
  rootUrl : string;

  constructor(private http : HttpClient) { 
    this.rootUrl = "http://localhost:23442/";
  }

  getProductionHouseList() : Observable<Array<ProductionHouseModel>> {

    return this.http.get<Array<ProductionHouseModel>>(this.rootUrl + 'api/productionHouse');
  }
}
