<template>
  <component :is="externalComponent" v-bind="attrMode"></component>
</template>

<script lang="ts" setup>
import scriptLoad from './scriptLoad';

import { ref, shallowRef, onMounted, watch, PropType } from 'vue';

const props = defineProps({
  remoteUrl: {
    type: String,
    default: () => '',
  },
  attrMode: {
    type: Object,
    default: () => '',
  },
});
// let props = defineProps<{ remoteUrl: string }>();
const externalComponent = shallowRef({});

// const attrMode = ref({ label: '我是label', title: '我是title' });
// const attrMode = ref({text:"xjsan"});
watch(
  () => props.attrMode,
  (n, o) => {},
  { deep: true, immediate: true }
);

onMounted(async () => {
  window.moon = {};
  // 下载远程js
  await scriptLoad(props.remoteUrl);
  // 挂载在mode
  let rcs = window.moon;

  for (let rc in rcs) {
    externalComponent.value = window.moon[rc];
  }
  // 清除
  delete window.moon;
});
</script>
