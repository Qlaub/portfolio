<template>
  <MobileNotFound v-if="uiStore.isMobile"></MobileNotFound>
  <DesktopNotFound v-else></DesktopNotFound>
</template>

<script setup lang="ts">
import DesktopNotFound from './DesktopNotFound.vue';
import MobileNotFound from './MobileNotFound.vue';
import { useUiStore } from 'src/stores/useUiStore';

const uiStore = useUiStore();
</script>
