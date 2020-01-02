export class DataHouseListOfHost {
  private _id: number;
  private _name: string;
  private _address: number;
  private _categoryName: string;
  private _price: string;
  private _status: string;


  constructor(id: number, name: string, address: number, categoryName: string, price: string, status: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._categoryName = categoryName;
    this._price = price;
    this._status = status;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get address(): number {
    return this._address;
  }

  set address(value: number) {
    this._address = value;
  }

  get categoryName(): string {
    return this._categoryName;
  }

  set categoryName(value: string) {
    this._categoryName = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
