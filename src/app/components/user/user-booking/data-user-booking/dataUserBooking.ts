export class DataUserBooking {
  private _id: number;
  private _checkin: Date;
  private _checkout: Date;
  private _numberGuest: number;
  private _children: string;
  private _orderTime: Date;


  constructor(id: number, checkin: Date, checkout: Date, numberGuest: number, children: string, orderTime: Date) {
    this._id = id;
    this._checkin = checkin;
    this._checkout = checkout;
    this._numberGuest = numberGuest;
    this._children = children;
    this._orderTime = orderTime;
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

  get children(): string {
    return this._children;
  }

  set children(value: string) {
    this._children = value;
  }

  get orderTime(): Date {
    return this._orderTime;
  }

  set orderTime(value: Date) {
    this._orderTime = value;
  }
}
