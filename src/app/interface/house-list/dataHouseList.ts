export class DataHouseList {
  // tslint:disable-next-line:variable-name
  private _id: number;

// tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _address: string;
  // tslint:disable-next-line:variable-name
  private _price: string;
  // tslint:disable-next-line:variable-name
  private _userId: number;


  constructor(id: number, name: string, address: string, price: string, userId: number) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._price = price;
    this._userId = userId;
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

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }
}

