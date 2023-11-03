<script setup lang="ts">
import mainCover from '@/assets/img/brunette-portada.jpg';
import { restInfo } from '@/utils/restInfo';

const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading title="Información del restaurant" :cover="mainCover" />
    </template>

    <template #content>
      <section class="text-dark-strong dark:text-base-100">
        <section>
          <h2 class="text-accent dark:text-primary text-4xl mb-2">{{ restInfo.name }}</h2>
          <h3 class="mb-2">Dirección: {{ restInfo.address }}</h3>
          <h4>Teléfono: {{ restInfo.phone }}</h4>
        </section>
        <section class="mt-4">
          <h3 class="text-accent dark:text-primary">Horario:</h3>
          <section v-for="{ id, name, time } in restInfo.schedule" :key="id" class="flex gap-4">
            <h4>{{ name }}</h4>
            <span>{{ time }}</span>
          </section>
        </section>
      </section>
    </template>
  </MainSection>
</template>
