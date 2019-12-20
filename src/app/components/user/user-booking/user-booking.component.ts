import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house/house.service';
import {ActivatedRoute} from '@angular/router';
import {HouseDetails} from '../../home-detail/house-details/houseDetails';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserBooking} from './data-user-booking/userBooking';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {DatePipe, formatDate} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {

  constructor(private houseService: HouseService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private token: TokenStorageService,
              private userService: UserService) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.activatedRoute.params.subscribe(params => {
      this.id = params.houseId;
    });
  }

  private houseId: string;
  private info: any = {};
  id: number;
  isSuccess = false;
  form: any = {};
  booking: UserBooking;
  house: HouseDetails;

  bookingForm: FormGroup;
  today = new Date();
  jstoday = '';

  submitted = false;


  ngOnInit() {

    this.getHouseId();

    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };


    this.bookingForm = this.formBuilder.group({
      checkin: new FormControl('', Validators.required),
      checkout: new FormControl(''),
      numberGuest: new FormControl(''),
      children: new FormControl(''),
      orderTime: this.today,
    });

  }

  getHouseId() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.houseService.getHouseId(this.id).subscribe(result => {
      this.house = result;
    }, error => {
      console.log(error);
    });

  }


  onSubmit() {

    this.submitted = true;
    const booking = this.bookingForm.value;

    // stop here if form is invalid
    if (this.bookingForm.invalid) {
      return this.userService.sendRequestBooking(booking, this.id).subscribe(result => {
        this.isSuccess = false;
        // this.router.navigate(['/home/house-list-for-guest']);
      });
    } else {
      this.userService.sendRequestBooking(booking, this.id).subscribe(result => {
        this.isSuccess = true;
      });
    }

    alert('SUCCESS!! :-)');
  }
}
