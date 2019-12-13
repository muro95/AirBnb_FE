import {DataUserBooking} from './dataUserBooking';

export class UserBooking {
  // tslint:disable-next-line:variable-name
  private _data: Array<DataUserBooking>;


  get data(): Array<DataUserBooking> {
    return this._data;
  }

  set data(value: Array<DataUserBooking>) {
    this._data = value;
  }
}
