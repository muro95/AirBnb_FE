import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interface/house/house';
import {DataHouseList} from '../interface/house-list/dataHouseList';
import {HouseDetails} from '../interface/house/houseDetails';
import {DataHouseDetails} from '../interface/house-details/dataHouseDetails';


@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public getList(): Observable<House> {
    return this.httpClient.get<House>(this.API_URL + 'houses');
  }

  public getHouseId(id: number): Observable<HouseDetails> {
    return this.httpClient.get<HouseDetails>(this.API_URL + 'houses2/' + id);
  }

}
