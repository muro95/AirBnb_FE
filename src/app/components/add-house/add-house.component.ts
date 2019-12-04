import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../services/house.service';
import {FormControl, FormGroup} from '@angular/forms';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  private info: any;
  isSuccess = false;


  constructor(private houseService: HouseService, private token: TokenStorageService, private router: Router) {
  }

  houseForm: FormGroup;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    this.houseForm = new FormGroup({
      houseName: new FormControl(''),
      category: new FormControl(''),
      address: new FormControl(''),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      area: new FormControl(''),
      user: new FormControl(''),
    });
  }

  onSubmit() {
    const house = this.houseForm.value;
    this.houseService.addHouse(house).subscribe(result => {
      this.isSuccess = true;
      this.router.navigate(['/home/house-list-for-guest']);
    });
  }

}
