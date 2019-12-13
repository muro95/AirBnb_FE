export class DataUserBooking {
  private _id: number;
  private _checkin: Date;
  private _checkout: Date;
  private _numberGuest: number;
  private _cost: string;
  private _orderTime: Date;


  constructor(id: number, checkin: Date, checkout: Date, numberGuest: number, cost: string, orderTime: Date) {
    this._id = id;
    this._checkin = checkin;
    this._checkout = checkout;
    this._numberGuest = numberGuest;
    this._cost = cost;
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

  get cost(): string {
    return this._cost;
  }

  set cost(value: string) {
    this._cost = value;
  }

  get orderTime(): Date {
    return this._orderTime;
  }

  set orderTime(value: Date) {
    this._orderTime = value;
  }
}
