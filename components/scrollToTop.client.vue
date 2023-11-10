<script setup lang="ts">
const store = useMainStore();
const { showScrollToTop } = storeToRefs(store);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <section
    class="fixed bottom-20 lg:bottom-8 flex-row p-2 gap-4 right-4 lg:right-8 card shadow-md text-primary bg-primary/20"
  >
    <Icon name="icon-park-outline:arrow-left" size="32" @click="navigateTo('/menu')" />
    <Icon v-if="showScrollToTop" name="icon-park-outline:arrow-up" size="32" @click="scrollToTop" />
  </section>
</template>
