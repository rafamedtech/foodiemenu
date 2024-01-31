<script setup lang="ts">
const store = useMainStore();
const { openModal, eventModal } = storeToRefs(store);
</script>

<template>
  <section>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Modal v-if="openModal" />
    <EventModal v-if="eventModal" />
  </section>
</template>
