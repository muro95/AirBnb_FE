import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house/house';
import {CategoryHouse} from '../../interface/category-house';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HouseService} from '../../services/house.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {HouseDetails} from './house-details/houseDetails';
import {DataHouseDetails} from './house-details/dataHouseDetails';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  private houseId: string;
  userId: string;
  house: HouseDetails;
  id: number;
  houseName: string;


  // formCommentCreate = new FormGroup({
  //   commentInput: new FormControl('')
  // });
  // commentUpdate = new FormControl();

  // private idComment: number;
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
    this.houseService.getHouseId(this.id).subscribe(result => {
      this.house = result;
      console.log('>>>>Data detail house: ' + JSON.stringify(this.house));
    }, error => {
      console.log(error);
    });
  }
}
