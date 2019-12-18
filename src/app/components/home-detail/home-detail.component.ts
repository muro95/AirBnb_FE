import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HouseService} from '../../services/house.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {HouseConvertById} from '../../interface/house/houseConvertById';
import {DataHouseDetails} from './house-details/dataHouseDetails';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  private houseId: string;
  userId: string;
  houseDemo: DataHouseDetails;
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
    // this.convertHouseId(this.houseDemo, this.sliptString(this.houseDemo)).subscribe(result => {
    //   this.house = result;
    // });
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      role: this.token.getAuthorities()
    };
  }

  getHouseId() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.houseService.getHouseId(this.id).subscribe(result => {
      this.houseDemo = result.data;
      console.log('>>>>Data detail house: ' + JSON.stringify(this.houseDemo));
      this.house = this.convertHouseId(this.houseDemo, this.sliptString(this.houseDemo));
    }, error => {
      console.log(error);
    });
    console.log(this.house);
  }

  public sliptString(house: DataHouseDetails): any {
    const arrayPicture = house.picture.split(' ');
    return arrayPicture;
  }

  public convertHouseId(house: DataHouseDetails, array: string[]): HouseConvertById {
    const houseDetail = new HouseConvertById(house.id, house.name, house.catName, array, house.address,
      house.bedroomNumber, house.bathroomNumber, house.description, house.price, house.area, house.userName, house.userId);
    return houseDetail;
  }
}
