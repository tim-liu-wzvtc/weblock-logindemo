import { createApp } from 'vue';
import MainPage from './components/MainPage.vue';

import * as Vue from 'vue';
(<any>window).Vue = Vue;

createApp(MainPage).mount('#app');
