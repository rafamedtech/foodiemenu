<script setup lang="ts">
import { waitersList } from '@/utils/surveyInfo';

// const { questions } = defineProps<{
//   questions: Question[];
// }>();

const store = useMainStore();
const { openModal, surveyData } = storeToRefs(store);

// const surveyData = reactive<SurveyData>({
//   name: '',
//   email: '',
//   waiter: 'No lo sé',
//   comments: '',
//   questions,
// });

const isLoading = ref(false);

async function sendSurvey(survey: SurveyData) {
  try {
    await $fetch(`/api/survey`, {
      method: 'POST',
      // Automatically stringified by ofetch
      body: {
        survey,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

async function formSubmit() {
  isLoading.value = true;

  await sendSurvey(surveyData.value);
  setTimeout(() => {
    isLoading.value = false;
    openModal.value = true;
  }, 2000);
}
</script>

<template>
  <form class="flex flex-col dark:text-base-100 max-w-md mx-auto" @submit.prevent="formSubmit">
    <article class="flex flex-col gap-4">
      <BaseInput label="Tu nombre (opcional)" v-model="surveyData.name" />
      <BaseInput label="Correo electrónico (opcional)" v-model="surveyData.email" />
      <BaseSelect label="Mesero que le atendió" :items="waitersList" v-model="surveyData.waiter" />
    </article>

    <Divider />

    <SurveyQuestion
      v-for="(question, index) in surveyData.questions"
      :index="index"
      :label="question.text"
      v-model="question.rating"
    />

    <BaseTextarea label="Comentarios" v-model="surveyData.comments" />

    <Divider />

    <BaseButton :loading="isLoading" type="primary" class="mx-auto">Enviar</BaseButton>
  </form>
</template>
