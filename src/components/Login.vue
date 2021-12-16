<script setup lang="ts">
import { ref, reactive } from 'vue';

defineProps<{ msg: string }>();
const data = reactive({
  name: '',
  password: '',
});
const login = () => {
  if (data.name === '123' && data.password === '123') {
    window.location.href = './main.html';
  }
};

const count = ref(0);
</script>

<template>
  <div>
    <input type="text" v-model="data.name" /><br />
    <input type="password" v-model="data.password" /><br />
    <input type="button" value="登录" @click="login" />
  </div>
</template>

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
