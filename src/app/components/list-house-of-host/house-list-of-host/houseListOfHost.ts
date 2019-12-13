import {DataHouseListOfHost} from './dataHouseListOfHost';
import {DataCategory} from './dataCategory';

export class HouseListOfHost {
  // tslint:disable-next-line:variable-name
  private _data: Array<DataHouseListOfHost>;
  private _dataCategory: Array<DataCategory>;

  get data(): Array<DataHouseListOfHost> {
    return this._data;
  }

  set data(value: Array<DataHouseListOfHost>) {
    this._data = value;
  }

  get dataCategory(): Array<DataCategory> {
    return this._dataCategory;
  }

  set dataCategory(value: Array<DataCategory>) {
    this._dataCategory = value;
  }
}
