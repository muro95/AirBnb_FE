import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house/house';
import {CategoryHouse} from '../../interface/category-house';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HouseService} from '../../services/house/house.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {HouseDetails} from './house-details/houseDetails';
import {DataHouseDetails} from './house-details/dataHouseDetails';
import {HouseConvertById} from '../../interface/house/houseConvertById';
import {CommentService} from '../../services/comment/comment.service';
import {DataComment} from '../../interface/comment/dataComment';
import {Comment} from '../../interface/comment/comment';
import {IAddComment} from './addComment';
import {DataHouseList} from '../user/home-list-for-guest/house-list/dataHouseList';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  private houseId: string;
  userId: string;
  // house: HouseDetails;
  id: number;
  houseName: string;
  private roles: string[];
  private authority: string;
  commentForm: FormGroup;
  isSuccess = false;
  commentList: Comment;
  idComment: number;
  houseData: DataHouseList;
  pageActual: 1;
  // private idComment: number;
  tokenJWT: string;
  private info: any;
  house: HouseConvertById;
  houseDemo: DataHouseDetails;
  i = 1;

  constructor(private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private houseService: HouseService,
              private commentService: CommentService,
              private router: Router,
              private token: TokenStorageService,
              private formBuilder: FormBuilder) {
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
    this.getAllCommentThisHome();


    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log('token from Browser:' + this.info.token);
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_HOST') {
          this.authority = 'host';
          return false;
        } else if (role === 'ROLE_USER') {
          this.authority = 'user';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

    this.commentForm = this.formBuilder.group({
      comment: new FormControl('', Validators.required),
      house: new FormControl(this.houseDemo)
    });


  }

  onCreateComment() {
    const id = +this.activatedRoute.snapshot.paramMap.get('houseId');
    const commment = this.commentForm.value;
    if (this.commentForm.invalid) {
      return this.commentService.createComment(commment, this.id).subscribe(result => {
        this.isSuccess = false;
        // this.router.navigate(['/home/house-list-for-guest']);
      });
    } else {
      this.commentService.createComment(commment, this.id).subscribe(result => {
        this.isSuccess = true;
        this.commentForm.reset();
        this.getAllCommentThisHome();
      });
      console.log('id housee on create comment ' + this.id);
    }
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

  getAllCommentThisHome() {
    this.commentService.getAllCommentByHome(this.id).subscribe(result => {
      this.commentList = result;
      console.log('>>>>Comment list:' + JSON.stringify(this.commentList));
    }, error => {
      console.log(error);
    });

  }


  getIdComment(id: number) {
    this.idComment = id;
  }


}
