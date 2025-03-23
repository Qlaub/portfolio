<template>
  <MobileNavBar v-if="uiStore.isMobile"></MobileNavBar>
  <DesktopNavBar v-else></DesktopNavBar>
  <router-view></router-view>
  <MobileFooterBar v-if="uiStore.isMobile"></MobileFooterBar>
  <DesktopFooterBar v-else></DesktopFooterBar>
</template>

<script setup lang="ts">
import DesktopNavBar from 'src/components/desktop/NavBar.vue';
import MobileNavBar from 'src/components/mobile/NavBar.vue';
import DesktopFooterBar from 'src/components/desktop/FooterBar.vue';
import MobileFooterBar from 'src/components/mobile/FooterBar.vue';
import { useUiStore } from 'src/stores/useUiStore';

const uiStore = useUiStore();
</script>
