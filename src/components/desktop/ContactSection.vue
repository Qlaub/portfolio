<template>
  <h2 class="section-header text-tertiary" id="contact-header" data-section="contact">{{ $t('contact.header') }}</h2>
  <div class="text-tertiary" v-html="$t('contact.body', { email: 'e.pirazzi@gmail.com' })"></div>
</template>
<script setup lang="ts">
</script>
<style scoped>

</style>
