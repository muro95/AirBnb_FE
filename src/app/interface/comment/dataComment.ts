import {DataUserBooking} from '../../components/user/user-booking/data-user-booking/dataUserBooking';
import {User} from '../user';
import {DataHouseList} from '../../components/user/home-list-for-guest/house-list/dataHouseList';
import {HouseConvertById} from '../house/houseConvertById';

export class DataComment {
  // tslint:disable-next-line:variable-name
  private _id: number;
  private _comment: string;
  private _houseName: string;
  private _userName: string;
  private _houseId: number;
  private _userId: number;


  constructor(id: number, comment: string, houseName: string, userName: string, houseId: number, userId: number) {
    this._id = id;
    this._comment = comment;
    this._houseName = houseName;
    this._userName = userName;
    this._houseId = houseId;
    this._userId = userId;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get houseName(): string {
    return this._houseName;
  }

  set houseName(value: string) {
    this._houseName = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get houseId(): number {
    return this._houseId;
  }

  set houseId(value: number) {
    this._houseId = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}
