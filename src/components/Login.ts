import { LoginBase, ILogin } from './LoginBase';
export type { LoginInfo } from './LoginBase';
export class Login extends LoginBase implements ILogin {
  login(): void {
    if (this.data.name === '123' && this.data.password === '123') {
      window.location.href = './main.html';
    }
  }
}
