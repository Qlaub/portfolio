<template>
  <div :class="wrapperClass">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useUiStore } from 'src/stores/useUiStore';

const uiStore = useUiStore();

const isShort = computed(() => {
  return uiStore.windowHeight <= 690;
});

const wrapperClass = computed(() => {
  return isShort.value ?
    'desktop-short' :
    'desktop-normal'
})
</script>
<style scoped>
.desktop-short {
  height: 650px;
}
.desktop-normal {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
