<template>
  <div :class="backgroundClasses">
    <div :class="overlayClasses"></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useSectionStore } from 'src/stores/useSectionStore';
import type { Section } from 'src/types/section';

const sectionStore = useSectionStore();

const backgroundClasses = computed(() => {
  return 'background-desktop';
});
const overlayClasses = computed(() => {
  const baseClass = 'overlay';
  const overlaySectionBgMap: Record<Section, string> = {
    home: 'bg-primary',
    about: 'bg-secondary',
    work: 'bg-tertiary',
    contact: 'bg-quaternary',
    resume: 'bg-quaternary',
  };
  const overlySectionOpacityMap: Record<Section, string> = {
    home: 'opacity-80',
    about: 'opacity-80',
    work: 'opacity-90',
    contact: 'opacity-90',
    resume: 'opacity-90',
  };
  return `${baseClass} ${overlaySectionBgMap[sectionStore.currentSection] ?? overlaySectionBgMap['home']} ${overlySectionOpacityMap[sectionStore.currentSection] ?? overlaySectionBgMap['home']}`;
});
</script>
<style scoped>
.background-desktop {
  position: fixed;
  background-image: url(../assets/images/bg.jpg);
  background-size: cover;
  background-position: top;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 100vh;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  transition: background-color 0.5s ease-in-out;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-90 {
  opacity: 0.9;
}
</style>
