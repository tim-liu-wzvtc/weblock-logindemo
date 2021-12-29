<template>
  <div class="col">
    <div class="col-f">
      <slot name="left">
        <div data-slot="left"></div>
      </slot>
    </div>
    <div class="col-super">
      <div class="col-t">
        <slot name="top">
          <div data-slot="top"></div>
        </slot>
      </div>
      <div class="col-b">
        <slot name="right">
          <div data-slot="right"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.col {
  display: flex;
}
.col-f {
  height: 400px;
  width: 400px;
  border: 1px black solid;
  flex: 1;
}
.col-super {
  height: 400px;
  width: 400px;
  border: 1px black solid;
  flex: 4;
}
.col-t {
  height: 100px;
  width: 100%;
  border: 1px solid black;
}
.col-b {
  height: 300px;
  width: 100%;
  border: 1px solid black;
}
</style>
