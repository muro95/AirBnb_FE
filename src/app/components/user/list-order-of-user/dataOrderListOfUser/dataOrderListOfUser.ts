export class DataOrderListOfUser {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _checkin: Date;
  // tslint:disable-next-line:variable-name
  private _checkout: Date;
  // tslint:disable-next-line:variable-name
  private _numberGuest: number;
  // tslint:disable-next-line:variable-name
  private _orderTime: Date;
  // tslint:disable-next-line:variable-name
  private _houseId: number;
  // tslint:disable-next-line:variable-name
  private _houseName: string;

  private _children: string;


  constructor(id: number, checkin: Date, checkout: Date, numberGuest: number, orderTime: Date,
              houseId: number, houseName: string, children: string) {
    this._id = id;
    this._checkin = checkin;
    this._checkout = checkout;
    this._numberGuest = numberGuest;
    this._orderTime = orderTime;
    this._houseId = houseId;
    this._houseName = houseName;
    this._children = children;
  }


  get children(): string {
    return this._children;
  }

  set children(value: string) {
    this._children = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get checkin(): Date {
    return this._checkin;
  }

  set checkin(value: Date) {
    this._checkin = value;
  }

  get checkout(): Date {
    return this._checkout;
  }

  set checkout(value: Date) {
    this._checkout = value;
  }

  get numberGuest(): number {
    return this._numberGuest;
  }

  set numberGuest(value: number) {
    this._numberGuest = value;
  }

  get orderTime(): Date {
    return this._orderTime;
  }

  set orderTime(value: Date) {
    this._orderTime = value;
  }

  get houseId(): number {
    return this._houseId;
  }

  set houseId(value: number) {
    this._houseId = value;
  }

  get houseName(): string {
    return this._houseName;
  }

  set houseName(value: string) {
    this._houseName = value;
  }
}
