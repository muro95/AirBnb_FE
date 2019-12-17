import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HouseService} from '../../services/house.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {HouseDetails} from './house-details/houseDetails';
import {HouseConvert} from '../../interface/house/houseConvert';
import {HouseConvertById} from '../../interface/house/houseConvertById';
import {isCombinedNodeFlagSet} from 'tslint';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  private houseId: string;
  userId: string;
  house: HouseConvertById;
  id: number;
  houseName: string;
  private tokenJWT: string;
  private info: any;

  constructor(private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private houseService: HouseService,
              private router: Router,
              private token: TokenStorageService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.houseId;
      this.houseName = params.houseName;
    });
    this.userId = this.token.getUserId();
    this.tokenJWT = this.token.getToken();
  }
  ngOnInit() {
    // console.log(this.houseId, this.token.getUserId());
    this.getHouseId();

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      role: this.token.getAuthorities()
    };
  }

  getHouseId() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.house = this.houseService.convertHouseId(this.id);
    console.log(this.house);
    // const id = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.houseService.getHouseId(this.id).subscribe(result => {
    //   this.house = result;
    //   console.log('>>>>Data detail house: ' + JSON.stringify(this.house));
    // }, error => {
    //   console.log(error);
    // });
  }
}
