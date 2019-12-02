import {CategoryHouse} from './category-house';
import {DataList} from './dataList';


export class House {
  // success: boolean;
  // message: string;
  private _data: Array<DataList>;

  get data(): Array<DataList> {
    return this._data;
  }

  set data(value: Array<DataList>) {
    this._data = value;
  }
}
