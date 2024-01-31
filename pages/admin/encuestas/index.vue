<script setup lang="ts">
import type { SurveyWithQuestions } from '@/types/Survey';

const user = useSupabaseUser();

const isLoading = ref(true);

const { data: surveys } = await useFetch<SurveyWithQuestions[]>('/api/surveys');

const { questionResults } = useSurveyDataAnalyzer(surveys.value);
const waiterSummary = useCalculateWaiterSummary(surveys.value);
const averageRating = useCalculateAverageRating(questionResults);

onMounted(() => {
  isLoading.value = false;
});

definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading
        title="Administrar encuestas"
        description="Gestiona las encuestas que tus clientes enviaron"
      />
    </template>
    <template #content>
      <section class="flex items-center w-full justify-center">
        <!-- <BaseSelect label="Selecciona un mes" :items="months" class="mb-4" /> -->
        <Stats :surveys="surveys" :rating="averageRating" />
      </section>

      <Divider />

      <!-- Question results -->
      <section class="flex flex-col md:flex-row gap-8 w-full md:px-2">
        <section class="mt-4 md:mt-0 md:w-1/2">
          <h2 class="text-2xl font-bold text-accent dark:text-primary">
            Calificación promedio por pregunta
          </h2>
          <section
            class="flex flex-col gap-2 lg:gap-8 my-2 mt-8"
            v-for="question in questionResults"
            :key="question.id"
          >
            <h3 class="text-base dark:text-base-100">{{ question.question }}</h3>
            <article class="flex gap-4 lg:gap-8">
              <input
                type="range"
                min="0"
                max="50"
                :value="question.averageRating * 10"
                disabled
                class="range range-accent dark:range-primary"
              />
              <span class="text-2xl dark:text-base-100">{{
                question.averageRating.toFixed(1)
              }}</span>
            </article>
          </section>
        </section>

        <Divider class="lg:hidden my-0" />

        <!-- Waiter results -->
        <section class="md:w-1/2 mb-4 md:mb-0">
          <h2 class="text-2xl font-bold text-accent dark:text-primary">
            Calificación promedio por mesero
          </h2>
          <section
            class="flex flex-col gap-2 lg:gap-8 my-2 mt-8"
            v-for="{ waiter, count, averageRating } in waiterSummary"
          >
            <article class="text-base dark:text-base-100 flex justify-between gap-2">
              <p>{{ waiter }}</p>
              <span class="badge">{{ count }} recibidas</span>
            </article>
            <article class="flex gap-4 lg:gap-8">
              <input
                type="range"
                min="0"
                max="50"
                :value="averageRating * 10"
                disabled
                class="range range-accent dark:range-primary"
              />
              <span class="text-2xl dark:text-base-100">{{ averageRating.toFixed(1) }}</span>
            </article>
          </section>
        </section>
      </section>

      <Divider />

      <!-- All surveys -->
      <section class="mt-4">
        <h2 class="text-2xl font-bold text-accent dark:text-primary">Todas las encuestas</h2>

        <section class="md:w-1/2 md:mx-auto">
          <SurveyCard v-for="survey in surveys" :key="survey.id" :survey="survey" />
        </section>
      </section>
    </template>
  </MainSection>
</template>
