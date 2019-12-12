import {DataHouseListOfHost} from './dataHouseListOfHost';

export class HouseListOfHost {
  // tslint:disable-next-line:variable-name
  private _data: Array<DataHouseListOfHost>;

  get data(): Array<DataHouseListOfHost> {
    return this._data;
  }

  set data(value: Array<DataHouseListOfHost>) {
    this._data = value;
  }
}
