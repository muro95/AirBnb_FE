import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house/house';
import {TokenStorageService} from '../../auth/token-storage.service';
import {HouseService} from '../../services/house.service';
import {HouseConvert} from '../../interface/house/houseConvert';
import {HouseList} from '../../interface/house/houList';

@Component({
  selector: 'app-home-list-for-guest',
  templateUrl: './home-list-for-guest.component.html',
  styleUrls: ['./home-list-for-guest.component.css']
})
export class HomeListForGuestComponent implements OnInit {
  private info: any;
// pagination setting
  pageActual = 1;
  maxSize = 3;
  searchText;
  house: HouseConvert[] = [];
  constructor(private token: TokenStorageService,
              private houseService: HouseService,
  ) {
  }

  ngOnInit() {
    this.getHouseList();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
    };
    console.log('token from Browser:' + this.info.token);
  }

  private getHouseList() {
    // this.houseService.getList().subscribe(result => {
    //   this.house = result;
    //   console.log('>>>>House list:' + JSON.stringify(this.house));
    // });
    this.house = this.houseService.convertHouseList();
    for (let i = 0; i < this.house.length; i++) {
      console.log(this.house[i]);
    }
    console.log(this.house);
    // console.log('>>>>House list:' + JSON.stringify(this.house));
  }
  // private getPicture(i): string {
  //   let img = [];
  //   img = this.house.data[i].picture.split(' ');
  //   return img[0];
  // }
}
