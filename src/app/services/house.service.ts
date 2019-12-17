import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataHouseList} from '../interface/house-list/dataHouseList';

import {HouseDetails} from '../components/home-detail/house-details/houseDetails';
import {DataCreatedHouse} from '../components/add-house/data-create-house/dataCreatedHouse';
import {HouseConvert} from '../interface/house/houseConvert';
import {House} from '../interface/house/house';
import {DataHouseDetails} from '../components/home-detail/house-details/dataHouseDetails';
import {HouseConvertById} from '../interface/house/houseConvertById';
import {error} from 'util';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
 // private houseList: HouseConvert[] = [];
  // private houseDetail: HouseConvertById;
  private houseListDetail: HouseConvertById[] = [];
  private readonly API_URL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  public getList(): Observable<House> {
    return this.httpClient.get<House>(this.API_URL + 'houses');
  }

  public convertHouseList(): HouseConvert[] {
    let houseList: HouseConvert[] = [];
    let array: DataHouseList[] = [];
    this.getList().subscribe(result => {
      array = result.data;
      for (let i = 0; i < array.length; i++) {
        const arrayPicture = array[i].picture.split(' ');
        const house = new HouseConvert(array[i].id, array[i].name, arrayPicture, array[i].address, array[i].price);

        houseList.push(house);
        console.log('>>>> ' + houseList);
      }
    });
    return houseList;
  }

  public getHouseId(id: number): Observable<HouseDetails> {
    return this.httpClient.get<HouseDetails>(this.API_URL + 'houses2/' + id);
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

  public addHouse(house: DataCreatedHouse): Observable<DataCreatedHouse> {
    return this.httpClient.post<DataCreatedHouse>(this.API_URL + 'host/houses', house);
  }

}
// this.houseDetail.id = house.id;
// this.houseDetail.name = house.name;
// this.houseDetail.catName = house.catName;
// this.houseDetail.picture = arrayPicture;
// this.houseDetail.address = house.address;
// this.houseDetail.bedroomNumber = house.bedroomNumber;
// this.houseDetail.bathroomNumber = house.bathroomNumber;
// this.houseDetail.description = house.description;
// this.houseDetail.price = house.price;
// this.houseDetail.area = house.area;
// this.houseDetail.userName = house.userName;
// this.houseDetail.userId = house.userId;