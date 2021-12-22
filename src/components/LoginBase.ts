import { ref, reactive } from 'vue';
import Login from './Login';

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

const data: LoginInfo = reactive({
  name: '',
  password: '',
});

let loginInstance = new Login(data);

const login = loginInstance.login;

export { data, login };
