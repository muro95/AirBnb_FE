import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {House} from '../../interface/house/house';
import {HouseService} from '../../services/house.service';
import {Data} from '@angular/router';
import {DataHouseList} from '../../interface/house-list/dataHouseList';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private info: any;

  house: House;


  searchAddress = '';


  constructor(private token: TokenStorageService,
              private houseService: HouseService
  ) {
  }

  ngOnInit() {
    this.getHouseList();
    this.info = {
      idUser: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    console.log('user id : ' + this.info.idUser);
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  private getHouseList() {
    this.houseService.getList().subscribe(result => {
      this.house = result;
      console.log('>>> house list:' + JSON.stringify(this.house));
    });
  }
}
