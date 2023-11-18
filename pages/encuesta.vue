<script setup lang="ts">
import { allQuestions } from '@/sanity/queries';

const { data: questions } = useSanityQuery<Question[]>(allQuestions);

const store = useMainStore();
const { isLoading } = storeToRefs(store);

onMounted(() => {
  isLoading.value = false;
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
        <AppHeading title="Encuesta" description="Descripcion de encuesta" class="title-heading" />
      </template>

      <template #content>
        <section class="content">
          <SurveyForm :questions="questions" />
        </section>
      </template>
    </MainSection>
  </main>
</template>
