<template>
  <div :class="wrapperClasses">
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

const wrapperClasses = computed(() => {
  const baseClasses = 'scroll-snap-center column items-center justify-center';

  return `${baseClasses} ${isShort.value ? 'desktop-height-short' : 'desktop-height-regular'}`;
});
</script>
<style scoped>
.scroll-snap-center {
  scroll-snap-align: center;
}
</style>
