<script setup lang="ts">
import { waitersList } from '@/utils/surveyInfo';

const surveyData = reactive<SurveyData>({
  name: '',
  email: '',
  waiter: 'No lo sé',
  questions: [
    {
      question: 'Pregunta1',
      answer: null,
    },
    {
      question: 'Pregunta2',
      answer: null,
    },
    {
      question: 'Pregunta3',
      answer: null,
    },
    {
      question: 'Pregunta4',
      answer: null,
    },
  ],
});

const isLoading = ref(false);

function formSubmit() {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
}
</script>

<template>
  <form
    class="flex flex-col gap-4 dark:text-base-100 max-w-md mx-auto"
    @submit.prevent="formSubmit"
  >
    <BaseInput label="Tu nombre (opcional)" v-model="surveyData.name" />
    <BaseInput label="Correo electrónico (opcional)" v-model="surveyData.email" />
    <BaseSelect label="Mesero que le atendió" :items="waitersList" v-model="surveyData.waiter" />

    <Divider />

    <SurveyQuestion
      v-for="(question, index) in surveyData.questions"
      :index="index"
      :label="question.question"
      v-model="question.answer"
    />

    <BaseButton :loading="isLoading">Enviar</BaseButton>
  </form>
</template>
