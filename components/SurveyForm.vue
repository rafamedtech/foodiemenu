<script setup lang="ts">
import { surveyQuestions, waitersList } from '@/utils/surveyInfo';

const surveyData = reactive<any>({
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

    <div class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"></div>

    <SurveyQuestion
      v-for="(question, index) in surveyData.questions"
      :index="index"
      :label="question.question"
      v-model="question.answer"
    />
    <!-- <SurveyQuestion :index="0" :label="surveyQuestions[0].text" v-model="surveyData.question1" />
    <div class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"></div>

    <SurveyQuestion :index="1" :label="surveyQuestions[1].text" v-model="surveyData.question2" />
    <div class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"></div>

    <SurveyQuestion :index="2" :label="surveyQuestions[2].text" v-model="surveyData.question3" />
    <div class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"></div>

    <SurveyQuestion :index="3" :label="surveyQuestions[3].text" v-model="surveyData.question4" />
    <div class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"></div>

    <SurveyQuestion :index="4" :label="surveyQuestions[4].text" v-model="surveyData.question5" />
    <div class="divider dark:before:bg-base-100/10 dark:after:bg-base-100/10"></div> -->

    <button class="btn mt-4 btn-accent dark:btn-primary lg:w-52 lg:mx-auto">
      <Icon v-if="isLoading" class="animate-spin" name="icon-park-outline:loading-four" size="32" />
      <span v-else> Enviar </span>
    </button>
  </form>
</template>
