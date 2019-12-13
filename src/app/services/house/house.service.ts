import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../../components/user/home-list-for-guest/house-list/house';
import {DataHouseList} from '../../components/user/home-list-for-guest/house-list/dataHouseList';

import {DataHouseDetails} from '../../components/home-detail/house-details/dataHouseDetails';
import {HouseDetails} from '../../components/home-detail/house-details/houseDetails';
import {DataCreatedHouse} from '../../components/host/add-house/data-create-house/dataCreatedHouse';
import {DataHouseListOfHost} from '../../components/host/list-house-of-host/house-list-of-host/dataHouseListOfHost';
import {HouseListOfHost} from '../../components/host/list-house-of-host/house-list-of-host/houseListOfHost';
import {DataUserBooking} from '../../components/user/user-booking/data-user-booking/dataUserBooking';
import {CategoryHouse} from '../../components/category-house/data-category/categoryHouse';


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

  public addHouse(house: DataCreatedHouse): Observable<DataCreatedHouse> {
    return this.httpClient.post<DataCreatedHouse>(this.API_URL + 'host/houses', house);
  }


  public getListHouseOfHost(): Observable<HouseListOfHost> {
    return this.httpClient.get<HouseListOfHost>(this.API_URL + 'host/houses');
  }

  public getListCategory(): Observable<CategoryHouse> {
    return this.httpClient.get<CategoryHouse>(this.API_URL + 'category-list');
  }
}
