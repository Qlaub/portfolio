<template>
  <MobileIndex v-if="uiStore.isMobile">Hello world from mobile</MobileIndex>
  <DesktopIndex v-else>Hello world from desktop</DesktopIndex>
</template>
<script setup lang="ts">
import DesktopIndex from './DesktopIndex.vue';
import MobileIndex from './MobileIndex.vue';
import { useUiStore } from 'src/stores/useUiStore';

const uiStore = useUiStore()
</script>
