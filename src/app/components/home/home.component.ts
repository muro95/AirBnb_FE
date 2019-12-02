import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {House} from '../../interface/house';
import {HouseService} from '../../services/house.service';
import {Data} from '@angular/router';
import {DataList} from '../../interface/dataList';


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
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
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
