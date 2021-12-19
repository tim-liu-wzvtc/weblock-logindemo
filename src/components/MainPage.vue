<script setup lang="ts">
import { ref } from 'vue';
const imgUrl: string = new URL('/assets/mainpageimage.png', import.meta.url)
  .href;
const mainpageimage = ref(imgUrl);
const mainpageimage2 = ref(
  'https://raw.githubusercontent.com/tim-liu-wzvtc/weblock-logindemo/master/public/mainpageimage.png'
);

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <image
    src="https://raw.githubusercontent.com/tim-liu-wzvtc/weblock-logindemo/master/public/mainpageimage.png"
  />

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
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
