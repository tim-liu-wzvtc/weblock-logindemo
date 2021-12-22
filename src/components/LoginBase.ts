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

/*

<script setup lang="ts">
import RemoteComponent from '../RemoteComp.vue';
import { ref, reactive } from 'vue';
import type { LoginInfo } from './LoginBase';
import { Login } from './Login';

const data: LoginInfo = reactive({
  name: '',
  password: '',
});

let loginInstance = new Login(data);

const login = loginInstance.login;
</script>


*/
