<template>
  <MobileIndex v-if="uiStore.isMobile"></MobileIndex>
  <DesktopIndex v-else></DesktopIndex>
</template>
<script setup lang="ts">
import DesktopIndex from './DesktopIndex.vue';
import MobileIndex from './MobileIndex.vue';
import { useUiStore } from 'src/stores/useUiStore';

const uiStore = useUiStore()
</script>
