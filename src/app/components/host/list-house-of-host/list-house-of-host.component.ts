import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house/house.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {HouseListOfHost} from './house-list-of-host/houseListOfHost';


@Component({
  selector: 'app-list-house-of-host',
  templateUrl: './list-house-of-host.component.html',
  styleUrls: ['./list-house-of-host.component.css']
})
export class ListHouseOfHostComponent implements OnInit {
  private info: any = {};
  pageActual = 1;
  houseListOfHost: HouseListOfHost;

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getHouseOfHost();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  private getHouseOfHost() {
    this.houseService.getListHouseOfHost().subscribe(result => {
      this.houseListOfHost = result;
      console.log('>>>>>houseList of host' + JSON.stringify(this.houseListOfHost));
    });
  }

}
