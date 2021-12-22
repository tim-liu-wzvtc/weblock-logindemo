<template>
  <div>
    <input type="text" v-model="data.name" />
    <br />
    <input type="password" v-model="data.password" />
    <br />
    <input type="button" value="登录1" @click="login" />
    <br />
    <RemoteComponent
      :remoteUrl="http://localhost:7777/Input3.umd.js"
      :attrs="{ text: '', Type: 'text', Top: '80px', Left: '0px', label: '' }"
    />
  </div>
</template>

<script setup lang="ts">
import RemoteComponent from '../components/RemoteComp.vue';
import { ref, reactive } from 'vue';
import type { LoginInfo } from './Login';
import { Login } from './Login';

const data: LoginInfo = reactive({
  name: '',
  password: '',
});

let loginInstance = new Login(data);
const login = loginInstance.login;
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
