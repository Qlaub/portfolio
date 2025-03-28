<template>
  <div :class="iconClasses">AG</div>
</template>
<script setup lang="ts">
import { useSectionStore } from 'src/stores/useSectionStore';
import { computed } from 'vue';

const sectionStore = useSectionStore();

const iconClasses = computed(() => {
  const commonClasses = 'icon flex items-center justify-center non-selectable ';
  if (sectionStore.currentSection === 'work') {
    return commonClasses + 'bg-tertiary text-quaternary';
  } else return commonClasses + 'bg-quaternary text-tertiary';
});
</script>
<style scoped>
.icon {
  width: 88px;
  height: 88px;
  font-family: 'Amatic SC', cursive;
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.1em;
}
</style>
