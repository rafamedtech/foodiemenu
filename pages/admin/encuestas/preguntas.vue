<script setup lang="ts">
import { surveyQuestions } from '@/utils/surveyInfo';
const isLoading = ref(true);
const loadingBtn = ref(false);

const questions = ref<Question[]>([]);

function cancelChanges() {
  loadingBtn.value = true;

  setTimeout(() => {
    loadingBtn.value = false;
    return navigateTo('/admin/encuestas');
  }, 2000);
}

onMounted(() => {
  questions.value = surveyQuestions;
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
      <AppHeading title="Administrar preguntas" />
    </template>
    <template #content>
      <section class="flex flex-col gap-2 max-w-lg pb-8">
        <BaseInput isrequired v-for="question in questions" v-model="question.text" />
      </section>
      <Divider />
      <section class="flex gap-4 justify-end">
        <NuxtLink to="/admin/encuestas"><BaseButton>Cancelar</BaseButton></NuxtLink>
        <BaseButton :loading="loadingBtn" type="primary" @click="cancelChanges"
          >Guardar cambios</BaseButton
        >
      </section>
    </template>
  </MainSection>
</template>
