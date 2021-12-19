export type LoginInfo = {
  name: string;
  password: string;
};
export interface ILogin {
  login(): void;
}

export class LoginBase implements ILogin {
  protected data: LoginInfo;

  constructor(data_: LoginInfo) {
    this.data = data_;
  }

  login(): void {
    if (this.data.name === '123' && this.data.password === '123') {
      window.location.href = './main.html';
    }
  }
}
