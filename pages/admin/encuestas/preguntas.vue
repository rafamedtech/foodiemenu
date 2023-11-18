<script setup lang="ts">
import { allQuestions } from '@/sanity/queries';
const isLoading = ref(true);
const loadingBtn = ref(false);
const supabase = useSupabaseClient();
const { $toast } = useNuxtApp();

// const questions = ref<Question[]>([]);

const { data: questions } = useSanityQuery<Evento[]>(allQuestions);

// const { data: questionsData } = await useAsyncData('questions', async () => {
//   const { data } = await supabase.from('questions').select('*');
//   return data;
// });

function cancelChanges() {
  loadingBtn.value = true;

  setTimeout(() => {
    loadingBtn.value = false;
    return navigateTo('/admin/encuestas');
  }, 2000);
}

onMounted(async () => {
  isLoading.value = false;
  console.log(questions.value);
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
      <section class="gap-4 flex justify-end">
        <NuxtLink to="/admin/encuestas"><BaseButton>Cancelar</BaseButton></NuxtLink>
        <BaseButton :loading="loadingBtn" type="primary" @click="cancelChanges"
          >Guardar cambios</BaseButton
        >
      </section>
    </template>
  </MainSection>
</template>
