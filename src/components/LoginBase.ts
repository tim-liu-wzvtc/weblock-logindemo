import { Login } from './Login';

export interface ILogin {
  login(): void;
}

export type LoginInfo = {
  name: string;
  password: string;
};

export class LoginBase {
  protected data: LoginInfo;

  constructor(data_: LoginInfo) {
    this.data = data_;
  }
}
