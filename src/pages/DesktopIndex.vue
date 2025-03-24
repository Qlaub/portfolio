<template>
  <div :class="containerClasses">
    <SectionWrapper>
      <HomeSection></HomeSection>
    </SectionWrapper>
    <SectionWrapper>
      <AboutSection></AboutSection>
    </SectionWrapper>
    <SectionWrapper>
      <WorkSection></WorkSection>
    </SectionWrapper>
    <SectionWrapper>
      <ContactSection></ContactSection>
    </SectionWrapper>
    <SectionWrapper>
      <ResumeSection></ResumeSection>
    </SectionWrapper>
  </div>
</template>
<script setup lang="ts">
import AboutSection from 'src/components/desktop/AboutSection.vue';
import HomeSection from 'src/components/desktop/HomeSection.vue';
import WorkSection from 'src/components/desktop/WorkSection.vue';
import ContactSection from 'src/components/desktop/ContactSection.vue';
import ResumeSection from 'src/components/desktop/ResumeSection.vue';
import SectionWrapper from 'src/components/desktop/SectionWrapper.vue';
import { computed } from 'vue';
import { useUiStore } from 'src/stores/useUiStore';

const uiStore = useUiStore();

const containerClasses = computed(() => {
  const baseClass = 'scroll-container-regular';

  return `${baseClass} ${uiStore.isShort ? 'desktop-height-short' : 'desktop-height-regular'}`;
});
</script>
<style scoped>
.scroll-container-regular {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
</style>
