import {DataHouseList} from '../house-list/dataHouseList';
import {DataHouseDetails} from '../../components/home-detail/house-details/dataHouseDetails';


export class House {
  // success: boolean;
  // message: string;
  // tslint:disable-next-line:variable-name
  // private _dataHouseDetails: Array<DataHouseDetails>;
  // tslint:disable-next-line:variable-name
  private _data: Array<DataHouseList>;
  // tslint:disable-next-line:variable-name
  private _success: boolean;
  // tslint:disable-next-line:variable-name
  private _message: string;

  get data(): Array<DataHouseList> {
    return this._data;
  }
  set data(value: Array<DataHouseList>) {
    this._data = value;
  }
  get isSuccess(): boolean {
    return this._success;
  }
  set isSuccess(value: boolean) {
    this._success = value;
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }
}
