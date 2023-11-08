<script setup lang="ts">
import { allCategories } from '@/sanity/queries';

const store = useMainStore();
const { isLoading } = storeToRefs(store);

const { data: categories } = useSanityQuery<Category[]>(allCategories);

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading title="Menú" description="Categorías principales del menú" />
    </template>

    <template #content>
      <section>
        <section class="grid md:grid-cols-2 gap-8 md:gap-8 md:px-2">
          <CategoryCard v-for="category in categories" :key="category._id" :category="category" />
        </section>
      </section>
    </template>
  </MainSection>
</template>
