import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useUiStore = defineStore('ui', () => {
  const windowWidth = ref(window.innerWidth);
  const isMobile = ref(window.innerWidth < 768);

  function updateUiStore() {
    windowWidth.value = window.innerWidth;
    isMobile.value = window.innerWidth < 768;
  }

  return { windowWidth, isMobile, updateUiStore };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
