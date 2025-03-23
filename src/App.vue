<template>
  <router-view />
</template>

<script setup lang="ts">
import { useUiStore } from './stores/useUiStore';
import { onMounted, onBeforeUnmount } from 'vue';

const uiStore = useUiStore();

const handleResize = () => {
  uiStore.updateUiStore();
};

onMounted(() => {
  handleResize();
  addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  removeEventListener('resize', handleResize);
});
</script>
