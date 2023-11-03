<script setup lang="ts">
const store = useMainStore();
const { isLoading } = storeToRefs(store);

onMounted(() => (isLoading.value = false));
</script>

<template>
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading title="Encuesta" description="Descripcion de encuesta" />
    </template>

    <template #content>
      <section>
        <SurveyForm />
      </section>
    </template>
  </MainSection>
</template>
