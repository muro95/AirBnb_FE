export class DataList {
  // tslint:disable-next-line:variable-name
 private _name: string;
  // tslint:disable-next-line:variable-name
 private _catName: string;
  // tslint:disable-next-line:variable-name
 private _userName: string;
  // tslint:disable-next-line:variable-name
 private _userId: string;

  constructor(name, catname, userName, userId) {
    this._name = name;
    this._catName = catname;
    this._userName = userName;
    this._userId = userId;
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
