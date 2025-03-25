import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Section } from 'src/types/section';

export const useSectionStore = defineStore('section', () => {
  const currentSection: Ref<Section> = ref('home');

  function updateCurrentSection(section: Section) {
    currentSection.value = section;
  }

  return { currentSection, updateCurrentSection };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSectionStore, import.meta.hot));
}
