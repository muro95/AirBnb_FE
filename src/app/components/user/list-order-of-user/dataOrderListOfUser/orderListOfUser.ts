import {DataOrderListOfUser} from './dataOrderListOfUser';

export class OrderListOfUser {

  // tslint:disable-next-line:variable-name
   _data: Array<DataOrderListOfUser>;

  get data(): Array<DataOrderListOfUser> {
    return this._data;
  }

  set data(value: Array<DataOrderListOfUser>) {
    this._data = value;
  }
}
