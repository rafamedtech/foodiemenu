<script setup lang="ts">
import surveyBanner from '@/assets/img/survey.svg';
const store = useMainStore();
const { isLoading } = storeToRefs(store);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading
        title="Gracias por tus comentarios!"
        description="Con tu opinión podemos mejorar nuestros productos y servicios."
      />
    </template>
    <template #content>
      <section class="mt-20">
        <img :src="surveyBanner" alt="" class="max-w-full lg:mx-auto lg:max-w-md" />
        <section class="w-full flex justify-center">
          <NuxtLink to="/menu" class="btn btn-primary w-fit normal-case mt-8 mx-auto"
            >Ir al menú</NuxtLink
          >
        </section>
      </section>
    </template>
  </MainSection>
</template>
