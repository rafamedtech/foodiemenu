<script setup lang="ts">
const { surveys } = defineProps<{
  surveys: Survey[] | null;
}>();

const newSurveys = surveys?.filter((survey) => survey.new).length;
</script>

<template>
  <div
    class="stats border dark:border-base-100/10 shadow-pinterest max-w-full grid-cols-3 bg-[#FEFEFE] dark:bg-dark-strong dark:text-base-100"
  >
    <div class="stat dark:border-base-100/20">
      <div class="stat-title text-accent dark:text-primary">Total</div>
      <div class="stat-value">{{ surveys?.length }}</div>
      <div class="stat-desc dark:text-base-100">En el mes</div>
    </div>

    <div class="stat">
      <div class="stat-title text-accent dark:text-primary">Nuevas</div>
      <div class="stat-value">{{ newSurveys }}</div>
      <div class="stat-desc dark:text-base-100">Del total</div>
    </div>
    <div class="stat">
      <div class="stat-title text-accent dark:text-primary">Calificación</div>
      <div class="stat-value">4.2</div>
      <div class="stat-desc dark:text-base-100">En el mes</div>
    </div>
  </div>
</template>
