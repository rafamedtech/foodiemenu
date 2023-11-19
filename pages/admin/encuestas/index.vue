<script setup lang="ts">
import { allQuestions } from '@/sanity/queries';
const { $toast } = useNuxtApp();

const isLoading = ref(true);

// const questions = ref<Question[]>([]);
const { data: questions } = useSanityQuery<Question[]>(allQuestions);

const { data: surveys, error } = await useFetch<Survey[]>('/api/surveys');
if (error.value) {
  $toast(error);
}
// console.log(surveys.value);

const months = ref([
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]);

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
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading
        title="Administrar encuestas"
        description="Gestiona las encuestas que tus clientes enviaron"
      />
    </template>
    <template #content>
      <section class="flex flex-col lg:items-center pb-8 md:flex-row w-full justify-between">
        <BaseSelect label="Selecciona un mes" :items="months" class="mb-4" />
        <Stats :surveys="surveys" />
      </section>

      <Divider />

      <section class="mt-4">
        <h2 class="text-xl font-bold text-accent dark:text-primary">
          Resultados por pregunta (promedio)
        </h2>
        <section
          class="flex flex-col gap-2 lg:gap-8 my-2 mt-8"
          v-for="(question, index) in questions"
        >
          <h3 class="text-base dark:text-base-100">{{ question.text }}</h3>
          <article class="flex gap-4 lg:gap-8">
            <input
              type="range"
              min="0"
              max="50"
              :value="(index + 1) * 10"
              disabled
              class="range range-accent dark:range-primary"
            />
            <span class="text-2xl dark:text-base-100">{{ index + 1 }}</span>
          </article>
        </section>

        <Divider />

        <NuxtLink to="/admin/encuestas/preguntas" class="flex justify-center">
          <BaseButton type="primary">Administrar preguntas</BaseButton>
        </NuxtLink>
      </section>
    </template>
  </MainSection>
</template>
