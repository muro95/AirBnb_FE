import {CategoryHouse} from '../category-house';
import {DataHouseList} from './dataHouseList';


export class House {
  // success: boolean;
  // message: string;
  // tslint:disable-next-line:variable-name
  private _data: Array<DataHouseList>;

  get data(): Array<DataHouseList> {
    return this._data;
  }

  set data(value: Array<DataHouseList>) {
    this._data = value;
  }
}
