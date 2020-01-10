export class DataInfo {
  private _id: number;
  private _email: string;
  private _name: string;
  private _username: string;
  private _picture: string;
  // tslint:disable-next-line:variable-name
  private _role_name: string;


  constructor(id: number, email: string, name: string, username: string, picture: string, role_name: string) {
    this._id = id;
    this._email = email;
    this._name = name;
    this._username = username;
    this._picture = picture;
    this._role_name = role_name;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get role_name(): string {
    return this._role_name;
  }

  set role_name(value: string) {
    this._role_name = value;
  }
}
