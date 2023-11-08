<script setup lang="ts">
const store = useMainStore();
const { openModal } = storeToRefs(store);
</script>

<template>
  <section>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Modal v-if="openModal" />
  </section>
</template>
