<template>
  <nav class="q-ml-lg">
    <ul :class="containerClasses">
      <template v-for="button in buttons" :key="button.name">
        <li
          @click="scrollToSection(button.name)"
          :class="[
            commonButtonClasses,
            sectionStore.currentSection === button.name
              ? selectedButtonClasses
              : unselectedButtonClasses,
          ]"
        >
          <a>{{ button.text }}</a>
        </li>
      </template>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useSectionStore } from 'src/stores/useSectionStore';
import { useI18n } from 'vue-i18n';

const sectionStore = useSectionStore();
const { t } = useI18n();

const commonButtonClasses = 'padding-x-mf q-py-sm text-weight-medium';

const buttons = computed(() => {
  return [
    { name: 'home', href: '/home', text: t('nav.home') },
    { name: 'about', href: '/about', text: t('nav.about') },
    { name: 'work', href: '/work', text: t('nav.work') },
    { name: 'contact', href: '/contact', text: t('nav.contact') },
    { name: 'resume', href: '/resume', text: t('nav.resume') },
  ];
});

const containerClasses = computed(() => {
  let classList = 'flex rounded overflow-visible ';

  if (sectionStore.currentSection === 'work') {
    classList += 'border-quaternary-xs';
  } else {
    classList += 'shadow-2';
  }

  return classList;
});

const selectedButtonClasses = computed(() => {
  let classList = 'no-pointer-events ';
  switch (sectionStore.currentSection) {
    case 'home':
      classList += 'text-tertiary bg-secondary';
      break;
    case 'about':
      classList += 'text-tertiary bg-primary';
      break;
    case 'work':
      classList += 'text-tertiary bg-quaternary';
      break;
    case 'contact':
      classList += 'text-tertiary bg-secondary';
      break;
    case 'resume':
      classList += 'text-tertiary bg-primary';
      break;
    default:
  }
  return classList;
});

const unselectedButtonClasses = computed(() => {
  let classList = 'cursor-pointer ';
  switch (sectionStore.currentSection) {
    case 'home':
      classList += 'text-tertiary bg-quaternary hover-bg-primary';
      break;
    case 'about':
      classList += 'text-tertiary bg-quaternary hover-bg-secondary';
      break;
    case 'work':
      classList += 'text-quaternary bg-tertiary hover-bg-quaternary hover-text-tertiary';
      break;
    case 'contact':
      classList += 'text-tertiary bg-quaternary hover-bg-primary';
      break;
    case 'resume':
      classList += 'text-tertiary bg-quaternary hover-bg-secondary';
      break;
    default:
  }
  return classList;
});

function scrollToSection(section: string) {
  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  font-weight: 500;
  color: inherit;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
li:first-of-type {
  border-radius: 2px 0 0 2px;
}
li:last-of-type {
  border-radius: 0 2px 2px 0;
}
.rounded {
  border-radius: 2px;
}
.padding-x-mf {
  padding-left: 32px;
  padding-right: 32px;
}
.overflow-visible {
  overflow: visible;
}
</style>
