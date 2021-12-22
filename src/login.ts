import { createApp } from 'vue';
import Login from './components/Login.vue';

import * as Vue from 'vue';
(<any>window).Vue = Vue;

createApp(Login).mount('#login');
