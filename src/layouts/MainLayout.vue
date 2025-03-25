<template>
  <MobileNavBar v-if="uiStore.isMobile"></MobileNavBar>
  <DesktopNavBar v-else></DesktopNavBar>
  <ReactiveBackground> </ReactiveBackground>
  <router-view></router-view>
  <MobileFooterBar v-if="uiStore.isMobile"></MobileFooterBar>
  <DesktopFooterBar v-else></DesktopFooterBar>
</template>

<script setup lang="ts">
import DesktopNavBar from 'src/components/desktop/NavBar.vue';
import MobileNavBar from 'src/components/mobile/NavBar.vue';
import DesktopFooterBar from 'src/components/desktop/FooterBar.vue';
import MobileFooterBar from 'src/components/mobile/FooterBar.vue';
import ReactiveBackground from 'src/components/ReactiveBackground.vue';
import { useUiStore } from 'src/stores/useUiStore';
import { useSectionStore } from 'src/stores/useSectionStore';
import { onMounted } from 'vue';
import type { Section } from 'src/types/section';

const uiStore = useUiStore();
const sectionStore = useSectionStore();

onMounted(() => {
  const options = {
    root: document.querySelector('#q-app'),
    rootMargin: '0px',
    threshold: 1.0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute('data-section');
        if (section) {
          sectionStore.updateCurrentSection(section as Section);
        }
      }
    });
  }, options);

  const headers = document.querySelectorAll('.section-header');
  headers.forEach((el) => observer.observe(el));
});
</script>
