export class DataHostDetails {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _username: string;
  // tslint:disable-next-line:variable-name
  private _roleId: number;


  constructor(id: number, username: string, roleId: number) {
    this._id = id;
    this._username = username;
    this._roleId = roleId;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get roleId(): number {
    return this._roleId;
  }

  set roleId(value: number) {
    this._roleId = value;
  }
}
