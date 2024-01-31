<script setup lang="ts">
import type { SurveyWithQuestions } from '@/types/Survey';
import type { ToastContent } from 'vue-toastification/dist/types/types';

const { survey } = defineProps<{
  survey: SurveyWithQuestions;
}>();

const { $toast } = useNuxtApp();

async function markAsRead() {
  if (survey.new) {
    survey.new = false;

    try {
      await $fetch(`/api/${survey.id}/read`, {
        method: 'PUT',
      });
    } catch (error) {
      $toast(error as ToastContent);
      survey.new = false;
    }
    return;
  }

  return;
}
</script>

<template>
  <div
    class="collapse collapse-plus bg-white h-fit border dark:border-base-100/10 dark:bg-dark-strong dark:text-base-100 mt-4"
    :class="{ 'border-2 border-accent dark:border-primary': survey.new }"
  >
    <input type="radio" name="my-accordion-3" @click="markAsRead" />
    <div class="collapse-title flex justify-between items-center gap-4 text-xl font-medium">
      {{ survey.waiter }}
      <span class="text-xs badge">
        {{
          new Date(survey.createdAt).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          })
        }}</span
      >
    </div>
    <div class="collapse-content">
      <section class="flex flex-col justify-between">
        <p class="text-accent dark:text-primary">Nombre:</p>
        <span class="text-dark-strong dark:text-base-100">{{ survey.name }}</span>
      </section>

      <section class="flex flex-col justify-between">
        <p class="text-accent dark:text-primary">Email:</p>
        <span class="text-dark-strong dark:text-base-100">{{ survey.email }}</span>
      </section>

      <Divider />

      <section class="flex flex-col gap-2">
        <section v-for="question in survey.questions" class="flex justify-between items-center">
          <p class="text-dark-strong dark:text-base-100 w-2/3">{{ question.text }}:</p>
          <span class="text-accent dark:text-primary text-xl w-1/3 text-end">{{
            question.rating
          }}</span>
        </section>
      </section>

      <Divider />

      <section class="flex flex-col justify-between">
        <p class="text-accent dark:text-primary">Comentarios:</p>
        <span class="text-dark-strong dark:text-base-100">{{ survey.comments }}</span>
      </section>
    </div>
  </div>
</template>
