export class DataHouseListOfHost {
  private _id: number;
  private _houseName: string;
  private _category: string;
  private _orderHouses: [];
  private _address: string;
  private _bedroomNumber: string;
  private _bathroomNumber: string;
  private _description: string;
  private _price: string;
  private _area: string;
  private _status: string;
  private _user: number;


  constructor(id: number, houseName: string, category: string, orderHouses: [], address: string, bedroomNumber: string, bathroomNumber: string, description: string, price: string, area: string, status: string, user: number) {
    this._id = id;
    this._houseName = houseName;
    this._category = category;
    this._orderHouses = orderHouses;
    this._address = address;
    this._bedroomNumber = bedroomNumber;
    this._bathroomNumber = bathroomNumber;
    this._description = description;
    this._price = price;
    this._area = area;
    this._status = status;
    this._user = user;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get houseName(): string {
    return this._houseName;
  }

  set houseName(value: string) {
    this._houseName = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get orderHouses(): [] {
    return this._orderHouses;
  }

  set orderHouses(value: []) {
    this._orderHouses = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get bedroomNumber(): string {
    return this._bedroomNumber;
  }

  set bedroomNumber(value: string) {
    this._bedroomNumber = value;
  }

  get bathroomNumber(): string {
    return this._bathroomNumber;
  }

  set bathroomNumber(value: string) {
    this._bathroomNumber = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): string {
    return this._price;
  }

  set price(value: string) {
    this._price = value;
  }

  get area(): string {
    return this._area;
  }

  set area(value: string) {
    this._area = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get user(): number {
    return this._user;
  }

  set user(value: number) {
    this._user = value;
  }
}
