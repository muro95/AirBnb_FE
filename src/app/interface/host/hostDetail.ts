import {DataHostDetails} from './dataHostDetails';

export class HostDetail {
  // tslint:disable-next-line:variable-name
  private _data: DataHostDetails;


  get data(): DataHostDetails {
    return this._data;
  }

  set data(value: DataHostDetails) {
    this._data = value;
  }
}
