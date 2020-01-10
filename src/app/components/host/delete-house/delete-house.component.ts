import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HouseService} from '../../../services/house/house.service';
import {Subscription} from 'rxjs';
import {DataHouseDetails} from '../../home-detail/house-details/dataHouseDetails';
import {DataCreatedHouse} from '../add-house/data-create-house/dataCreatedHouse';
import {DataHouseList} from '../../user/home-list-for-guest/house-list/dataHouseList';
import {HouseDetails} from '../../home-detail/house-details/houseDetails';

@Component({
  selector: 'app-delete-house',
  templateUrl: './delete-house.component.html',
  styleUrls: ['./delete-house.component.css']
})
export class DeleteHouseComponent implements OnInit {
  id: number;
  sub: Subscription;
  house: HouseDetails;
  check = false;

  constructor(private activatedRoute: ActivatedRoute,
              private houseService: HouseService,
              private  router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.houseId;
    });
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.houseService.getHouseId(this.id).subscribe(next => {
        this.house = next;
      }, error => {
        console.log(error);
      });
    });
  }

  delete() {
    this.houseService.deleteHouse(this.id).subscribe(next => {
      this.router.navigate(['/home/house-of-host']);
    }, error => {
      this.check = true;
    });
  }
}
