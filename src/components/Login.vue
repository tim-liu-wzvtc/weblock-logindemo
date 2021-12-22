<template>
  <div>
    <input type="text" v-model="data.name" />
    <br />
    <input type="password" v-model="data.password" />
    <br />
    <input type="button" value="登录12" @click="login" />
    <br />
    <RemoteComponent
      remoteUrl="http://localhost:7777/Input3.umd.js"
      :attrs="{ text: '', Type: 'text', Top: '80px', Left: '0px', label: '' }"
    />
  </div>
</template>

<script setup lang="ts">
import RemoteComponent from '../RemoteComp.vue';
import { ref, reactive } from 'vue';
import { Login, LoginInfo } from './Login';

const data: LoginInfo = reactive({
  name: '',
  password: '',
});

let loginInstance = new Login(data);

const login = loginInstance.login;
</script>
