<script setup lang="ts">
import mainCover from '@/assets/img/brunette-portada.jpg';
import { restInfo } from '@/utils/restInfo';

const isLoading = ref(true);

const { name, address, phone, schedule, socials } = restInfo;

const { myAnimations } = useAnimations();

onMounted(() => {
  isLoading.value = false;
  // myAnimations();
});

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
});
</script>

<template>
  <main>
    <MainSection :loading="isLoading">
      <template #heading>
        <AppHeading title="Información del restaurant" class="title-heading" />
      </template>

      <template #content>
        <section
          class="text-dark-strong dark:text-base-100 md:mt-20 lg:mt-4"
          :class="{ content: isLoading }"
        >
          <section class="md:w-1/2 md:mx-auto">
            <AppHeading :title="name" :cover="mainCover" class="title-heading" />
            <section class="py-8 text-accent dark:text-primary">
              <h3>
                Dirección:
                <span class="block text-dark-strong dark:text-base-100">{{ address }}</span>
              </h3>
              <h4>
                Teléfono: <span class="block text-dark-strong dark:text-base-100">{{ phone }}</span>
              </h4>
            </section>
          </section>

          <section class="my-4 md:w-1/2 md:mx-auto">
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

          <section class="flex justify-center gap-4 mt-8">
            <NuxtLink
              v-for="{ id, name, icon, url } in socials"
              :key="id"
              :to="url"
              target="_blank"
              class="flex flex-col items-center"
            >
              <Icon :name="icon" size="32" />
              <span>{{ name }}</span>
            </NuxtLink>
          </section>
        </section>
      </template>
    </MainSection>
  </main>
</template>
