<script setup lang="ts">
import mainCover from '@/assets/img/brunette-portada.jpg';
import { restInfo } from '@/utils/restInfo';

const isLoading = ref(true);

const { name, address, phone, schedule } = restInfo;

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
          <h2 class="text-accent dark:text-primary text-4xl mb-2">{{ name }}</h2>
          <section class="mb-2 text-accent dark:text-primary">
            <h3>
              Dirección:
              <span class="block text-dark-strong dark:text-base-100">{{ address }}</span>
            </h3>
            <h4>
              Teléfono: <span class="block text-dark-strong dark:text-base-100">{{ phone }}</span>
            </h4>
          </section>
        </section>

        <section class="mt-4">
          <h3 class="text-accent dark:text-primary text-xl">Horario:</h3>
          <section
            v-for="{ id, name, time } in schedule"
            :key="id"
            class="flex gap-4 justify-between"
          >
            <h4>{{ name }}</h4>
            <span>{{ time }}</span>
          </section>
        </section>
      </section>
    </template>
  </MainSection>
</template>
