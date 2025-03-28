import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Section } from 'src/types/section';

export const useSectionStore = defineStore('section', () => {
  const currentSection: Ref<Section> = ref('home');

  function updateCurrentSection(section: Section, newPath: string) {
    currentSection.value = section;
    // Update the URL without reloading/re-rendering
    window.history.pushState({}, '', newPath);
  }

  return { currentSection, updateCurrentSection };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSectionStore, import.meta.hot));
}
