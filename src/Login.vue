<template>
  <component :is="ac0e8f2c8af85c4a548ebfe9b16dc297ab" v-bind="{}"
    ><template v-slot:default><router-view /></template>
  </component>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import externalComponent from "./externalComponent.js";

const ac0e8f2c8af85c4a548ebfe9b16dc297ab = computed(() =>
  defineAsyncComponent(() => externalComponent("/comp/Page.umd.js"))
);
</script>
<style></style>
