import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {HouseService} from '../../../services/house/house.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {CreateHouse} from '../add-house/data-create-house/createHouse';
import {CategoryHouse} from '../../category-house/data-category/categoryHouse';
import {DataCreatedHouse} from '../add-house/data-create-house/dataCreatedHouse';
import {Subscription} from 'rxjs';
import {HouseDetails} from '../../home-detail/house-details/houseDetails';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {
  isSuccess = false;
  form: any = {};
  house: HouseDetails;
  category: CategoryHouse;
  submitted = false;
  categorySelected: number;
  sub: Subscription;
  id: number;
  houseDetails: HouseDetails;
  houseData: DataCreatedHouse;
  picture: string;
  arrayPicture: string;
  houseForm: FormGroup;
  private info: any = {};

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private fb: AngularFireDatabase
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.houseId;
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.houseForm.controls;
  }

  ngOnInit() {
    this.getCategoryList();
    this.info = {
      id: this.token.getUserId(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    this.houseForm = this.formBuilder.group({
      houseName: new FormControl('', Validators.required),
      category: new FormControl(this.category),
      picture: new FormControl(''),
      address: new FormControl('', Validators.required),
      bedroomNumber: new FormControl('', Validators.required),
      bathroomNumber: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', Validators.required),
      area: new FormControl(''),
      user: this.token.getUserId(),
    });
    console.log('>>>>get user now:' + this.token.getUserId());

    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.houseService.getHouseId(this.id).subscribe(next => {
        this.house = next;

      }, error => {
        console.log(error);
      });
    });
    console.log('id house detail to edit >>>> ' + this.id);
  }

  editHouse() {
    this.submitted = true;
    this.houseData = this.houseForm.value;
    // this.arrayPicture = this.arrayPicture.trim();
    this.houseData.picture = this.arrayPicture;
    console.log(this.houseData);
    const house = this.houseForm.value;

    // stop here if form is invalid
    // if (this.houseForm.invalid) {
    //   return this.houseService.editHouse(this.houseData, this.id).subscribe(result => {
    //     this.isSuccess = true;
    //     // this.router.navigate(['/home/house-list-for-guest']);
    //   });
    // }
    if (this.houseForm.invalid) {
      return this.houseService.editHouse(this.houseData, this.id).subscribe(result => {
        this.isSuccess = false;
        // this.router.navigate(['/home/house-list-for-guest']);
      });
    } else {
      this.houseService.editHouse(house, this.id).subscribe(result => {
        this.isSuccess = true;
      });
    }

    alert('SUCCESS!! :-)');
  }

  uploadFile(event) {
    this.arrayPicture = '';
    console.log(event);
    const file = event.target.files;
    const metadata = {
      contentType: 'image/jpeg',
    };
    let i = 0;
    while (i < file.length) {
      console.log('Outside ', i, file[i]);
      // @ts-ignore
      const uploadTask = firebase.storage().ref('img/' + file[i].name + Date.now()).put(file[i], metadata);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          console.log(snap);
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.arrayPicture += downloadURL + ' ';
          });
        });
      i++;
    }
  }

  private getCategoryList() {
    this.houseService.getListCategory().subscribe(result => {
      this.category = result;
    });
  }
}
