import { LoginBase } from './LoginBase';
export class Login extends LoginBase {
  login(): void {
    if (this.data.name === '123' && this.data.password === '123') {
      window.location.href = './main.html';
    }
  }
}
