import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../services/house.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
import {House} from '../../interface/house/house';
import {DataCreatedHouse} from './data-create-house/dataCreatedHouse';
import {CreateHouse} from './data-create-house/createHouse';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  private info: any = {};
  isSuccess = false;
  form: any = {};
  house: CreateHouse;
  submitted = false;

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder
  ) {
  }

  houseForm: FormGroup;

  ngOnInit() {
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    this.houseForm = this.formBuilder.group({
      houseName: new FormControl('', Validators.required),
      category: new FormControl(''),
      address: new FormControl(''),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      area: new FormControl(''),
      user: this.token.getUserId(),
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.houseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    const house = this.houseForm.value;

    // stop here if form is invalid
    if (this.houseForm.invalid) {
      return this.houseService.addHouse(house).subscribe(result => {
        this.isSuccess = false;
        // this.router.navigate(['/home/house-list-for-guest']);
      });
    } else {
      this.houseService.addHouse(house).subscribe(result => {
        this.isSuccess = true;
      });
    }

    alert('SUCCESS!! :-)');
  }

}
