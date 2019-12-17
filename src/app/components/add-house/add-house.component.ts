import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../services/house.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';
import {House} from '../../interface/house/house';
import {DataCreatedHouse} from './data-create-house/dataCreatedHouse';
import {CreateHouse} from './data-create-house/createHouse';
import * as firebase from 'firebase';
import {Picture} from './data-create-house/picture';
import {AngularFireDatabase} from '@angular/fire/database';
import {formatI18nPlaceholderName} from '@angular/compiler/src/render3/view/i18n/util';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  private info: any = {};
  houseData: DataCreatedHouse;
  isSuccess = false;
  form: any = {};
  house: CreateHouse;
  submitted = false;
  picture: string;
  arrayPicture: string;

  constructor(private houseService: HouseService,
              private token: TokenStorageService,
              private router: Router,
              private formBuilder: FormBuilder,
              private fb: AngularFireDatabase
  ) {
  }

  houseForm: FormGroup;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    this.houseForm = this.formBuilder.group({
      houseName: new FormControl('', Validators.required),
      category: new FormControl(''),
      picture: new FormControl(''),
      address: new FormControl(''),
      bedroomNumber: new FormControl(''),
      bathroomNumber: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      area: new FormControl(''),
      user: new FormControl(''),
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.houseForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.houseData = this.houseForm.value;
    this.houseData.picture = this.arrayPicture;
    console.log(this.houseData);

    if (this.houseForm.invalid) {
      return this.houseService.addHouse(this.houseData).subscribe(result => {
        this.isSuccess = false;
        // this.router.navigate(['/home/house-list-for-guest']);
      });
    } else {
      this.houseService.addHouse(this.houseData).subscribe(result => {
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
    for (let i = 0; i < file.length; i++) {
      const uploadTask = firebase.storage().ref('img/' + Date.now()).put(file[i], metadata);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            this.picture = downloadURL;
            this.arrayPicture += this.picture + ' ';
            console.log('>>> ' + this.arrayPicture);
          });
        }
      );
    }
  }
}
