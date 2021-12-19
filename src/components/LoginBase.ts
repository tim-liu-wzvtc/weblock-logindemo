export type LoginInfo = {
  name: string;
  password: string;
};
export interface ILogin {
  login(): void;
}

export class LoginBase {
  protected data: LoginInfo;

  constructor(data_: LoginInfo) {
    this.data = data_;
  }
}
