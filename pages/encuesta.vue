<script setup lang="ts">
const store = useMainStore();
const { isLoading } = storeToRefs(store);

onMounted(() => {
  isLoading.value = false;
});

const { getQuestions } = store;

getQuestions();

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
        <AppHeading title="Encuesta" description="Descripcion de encuesta" class="title-heading" />
      </template>

      <template #content>
        <section class="content">
          <SurveyForm />
        </section>
      </template>
    </MainSection>
  </main>
</template>
