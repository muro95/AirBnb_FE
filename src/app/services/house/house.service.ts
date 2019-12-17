import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../../interface/house/house';
import {DataHouseList} from '../../components/user/home-list-for-guest/house-list/dataHouseList';

import {DataHouseDetails} from '../../components/home-detail/house-details/dataHouseDetails';
import {HouseDetails} from '../../components/home-detail/house-details/houseDetails';
import {DataCreatedHouse} from '../../components/host/add-house/data-create-house/dataCreatedHouse';
import {DataHouseListOfHost} from '../../components/host/list-house-of-host/house-list-of-host/dataHouseListOfHost';
import {HouseListOfHost} from '../../components/host/list-house-of-host/house-list-of-host/houseListOfHost';
import {DataUserBooking} from '../../components/user/user-booking/data-user-booking/dataUserBooking';
import {CategoryHouse} from '../../components/category-house/data-category/categoryHouse';
import {HouseConvertById} from '../../interface/house/houseConvertById';
import {HouseConvert} from '../../interface/house/houseConvert';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houseListDetail: HouseConvertById[] = [];
  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public convertHouseList(): HouseConvert[] {
    let houseList: HouseConvert[] = [];
    let array: DataHouseList[] = [];
    this.getList().subscribe(result => {
      array = result.data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < array.length; i++) {
        const arrayPicture = array[i].picture.split(' ');
        const house = new HouseConvert(array[i].id, array[i].name, arrayPicture, array[i].address, array[i].price);

        houseList.push(house);
        console.log('>>>> ' + houseList);
      }
    });
    return houseList;
  }

  public convertHouseId(id: number): HouseConvertById {
    // this.houseListDetail.splice(1);
    this.getHouseId(id).subscribe(result => {
      const house: DataHouseDetails = result.data;
      const arrayPicture = house.picture.split(' ');
      // console.log(result);
      const houseDetail = new HouseConvertById(house.id, house.name, house.catName, arrayPicture, house.address,
        house.bedroomNumber, house.bathroomNumber, house.description, house.price, house.area, house.userName, house.userId);
      this.houseListDetail[0] = houseDetail;
    });
    console.log(this.houseListDetail[0]);
    return this.houseListDetail[0];
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
