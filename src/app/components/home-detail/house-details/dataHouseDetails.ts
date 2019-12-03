export class  DataHouseDetails {
  // tslint:disable-next-line:variable-name
  private _id: number; // tslint:disable-next-line:variable-name
  private _name: string; // tslint:disable-next-line:variable-name
  private _catName: string; // tslint:disable-next-line:variable-name
  private _address: string; // tslint:disable-next-line:variable-name
  private _bedroomNumber: string; // tslint:disable-next-line:variable-name
  private _bathroomNumber: string; // tslint:disable-next-line:variable-name
  private _description: string; // tslint:disable-next-line:variable-name
  private _price: string; // tslint:disable-next-line:variable-name
  private _area: string; // tslint:disable-next-line:variable-name
  private _userName: string; // tslint:disable-next-line:variable-name
  private _userId: string;


  constructor(id: number, name: string, catName: string,
              address: string, bedroomNumber: string,
              bathroomNumber: string, description: string,
              price: string, area: string, userName: string, userId: string) {
    this._id = id;
    this._name = name;
    this._catName = catName;
    this._address = address;
    this._bedroomNumber = bedroomNumber;
    this._bathroomNumber = bathroomNumber;
    this._description = description;
    this._price = price;
    this._area = area;
    this._userName = userName;
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

  get catName(): string {
    return this._catName;
  }

  set catName(value: string) {
    this._catName = value;
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

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }
}
