import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const windowWidth = ref(window.innerWidth);
  const windowHeight = ref(window.innerHeight);
  const isMobile = ref(window.innerWidth < 768);

  function updateUiStore() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
    isMobile.value = window.innerWidth < 768;
  }

  return { windowWidth, windowHeight, isMobile, updateUiStore };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
