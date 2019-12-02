import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house';
import {CategoryHouse} from '../../interface/category-house';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HouseService} from '../../services/house.service';
import {TokenStorageService} from '../../auth/token-storage.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  private houseId: string;
  userId: string;
  house: House;
  id: number;
  houseName: string;
  categoryHouse: CategoryHouse;

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
    const id = +this.activatedRoute.snapshot.paramMap.get('houseId');
    this.houseService.getHouseId(this.id).subscribe(result => {
      this.house = result;
    }, error => {
      console.log(error);
    });
  }
}
