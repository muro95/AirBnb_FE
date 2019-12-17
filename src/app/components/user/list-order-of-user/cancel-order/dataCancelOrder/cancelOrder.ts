import {DataCancelOrder} from './dataCancelOrder';

export class CancelOrder {
  private _data: Array<DataCancelOrder>;

  get data(): Array<DataCancelOrder> {
    return this._data;
  }

  set data(value: Array<DataCancelOrder>) {
    this._data = value;
  }
}
