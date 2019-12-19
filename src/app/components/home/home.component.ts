import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {House} from '../../interface/house/house';
import {HouseService} from '../../services/house/house.service';
import {Data} from '@angular/router';
import {DataHouseList} from '../user/home-list-for-guest/house-list/dataHouseList';
import {Info} from '../../interface/info';
import {HouseConvert} from '../../interface/house/houseConvert';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private info: Info;
  userId: string;
  // house: House;
  house: HouseConvert[];

  searchAddress = '';


  constructor(private token: TokenStorageService,
              private houseService: HouseService
  ) {
  }

  ngOnInit() {
    this.getHouseList();
    this.userId = this.token.getUserId();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('id current user: ' + this.info.id);
    console.log('token from Browser:' + this.info.token);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  private getHouseList() {
    // this.houseService.getList().subscribe(result => {
    //   this.house = result;
    //   console.log('>>> house list:' + JSON.stringify(this.house));
    // });

    this.house = this.houseService.convertHouseList();
    console.log('>>>>House list:' + JSON.stringify(this.house));
  }
}
