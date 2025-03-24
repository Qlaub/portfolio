<template>
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
</template>
<script setup lang="ts">
import AboutSection from 'src/components/desktop/AboutSection.vue';
import HomeSection from 'src/components/desktop/HomeSection.vue';
import WorkSection from 'src/components/desktop/WorkSection.vue';
import ContactSection from 'src/components/desktop/ContactSection.vue';
import ResumeSection from 'src/components/desktop/ResumeSection.vue';
import SectionWrapper from 'src/components/desktop/SectionWrapper.vue';
</script>
