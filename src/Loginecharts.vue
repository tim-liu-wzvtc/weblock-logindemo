<template>
  <component :is="aca12a4ab8156740169bc7d1d9441c6265" v-bind="{}"> </component>
  <component :is="aca22a4ab8156740169bc7d1d9441c6265" v-bind="{}"> </component>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import externalComponent from "./externalComponent.js";

const aca12a4ab8156740169bc7d1d9441c6265 = computed(() =>
  defineAsyncComponent(() => externalComponent("/comp/Button.umd.js"))
);
const aca22a4ab8156740169bc7d1d9441c6265 = computed(() =>
  defineAsyncComponent(() => externalComponent("/comp/Input.umd.js"))
);
</script>
<style></style>
