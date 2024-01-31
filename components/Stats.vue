<script setup lang="ts">
import type { SurveyWithQuestions } from '@/types/Survey';

const { surveys, rating } = defineProps<{
  surveys: SurveyWithQuestions[] | null;
  rating: number;
}>();

const newSurveys = surveys?.filter((survey) => survey.new).length;
</script>

<template>
  <div
    class="stats border dark:border-base-100/10 max-w-full grid-cols-3 bg-[#FEFEFE] dark:bg-dark-strong dark:text-base-100"
  >
    <div class="stat dark:border-base-100/20">
      <div class="stat-title text-accent dark:text-primary">Total</div>
      <div class="stat-value">{{ surveys?.length }}</div>
      <div class="stat-desc dark:text-base-100">Recibidas</div>
    </div>

    <div class="stat">
      <div class="stat-title text-accent dark:text-primary">Nuevas</div>
      <div class="stat-value">{{ newSurveys }}</div>
      <div class="stat-desc dark:text-base-100">Sin leer</div>
    </div>
    <div class="stat">
      <div class="stat-title text-accent dark:text-primary">Calificación</div>
      <div class="stat-value">{{ rating.toFixed(1) }}</div>
      <div class="stat-desc dark:text-base-100">En general</div>
    </div>
  </div>
</template>
