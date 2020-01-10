import {DataInfo} from './dataInfo';

export class Information {
   private _data: Array<DataInfo>;


  get data(): Array<DataInfo> {
    return this._data;
  }

  set data(value: Array<DataInfo>) {
    this._data = value;
  }
}
