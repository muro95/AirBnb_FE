export class DataCreatedHouse {
// tslint:disable-next-line:variable-name
  private _houseName: string;
  // tslint:disable-next-line:variable-name
  private _category: number;
  // tslint:disable-next-line:variable-name
  private _address: string;
  // tslint:disable-next-line:variable-name
  private _bedroomNumber: string;
  // tslint:disable-next-line:variable-name
  private _bathroomNumber: string;
  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _price: string;
  // tslint:disable-next-line:variable-name
  private _area: string;
  // tslint:disable-next-line:variable-name
  private _user: string;


  // tslint:disable-next-line:max-line-length
  constructor(houseName: string, category: number, address: string, bedroomNumber: string, bathroomNumber: string, description: string, price: string, area: string, user: string) {
    this._houseName = houseName;
    this._category = category;
    this._address = address;
    this._bedroomNumber = bedroomNumber;
    this._bathroomNumber = bathroomNumber;
    this._description = description;
    this._price = price;
    this._area = area;
    this._user = user;
  }

  get houseName(): string {
    return this._houseName;
  }

  set houseName(value: string) {
    this._houseName = value;
  }

  get category(): number {
    return this._category;
  }

  set category(value: number) {
    this._category = value;
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

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }
}
