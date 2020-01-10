import {DataComment} from './dataComment';

export class Comment {
  // tslint:disable-next-line:variable-name
   _data: Array<DataComment>;


  get data(): Array<DataComment> {
    return this._data;
  }

  set data(value: Array<DataComment>) {
    this._data = value;
  }
}
