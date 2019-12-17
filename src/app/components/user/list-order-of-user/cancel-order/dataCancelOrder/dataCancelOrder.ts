export class DataCancelOrder {
  private _id: number;
  private _checkin: Date;
  private _checkout: Date;
  private _numberGuest: number;
  private _orderTime: Date;
  private _houseId: number;
  private _houseName: string;

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
