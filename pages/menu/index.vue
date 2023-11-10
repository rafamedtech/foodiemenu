<script setup lang="ts">
import { allCategories } from '@/sanity/queries';

const store = useMainStore();
const { isLoading } = storeToRefs(store);

const { data: categories } = useSanityQuery<Category[]>(allCategories);

onMounted(() => {
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
  <main>
    <MainSection :loading="isLoading">
      <template #heading>
        <AppHeading
          title="Menú"
          description="Categorías principales del menú"
          class="title-heading"
        />
      </template>

      <template #content>
        <section>
          <section class="grid md:grid-cols-2 gap-8 md:gap-8 md:px-2 content">
            <NuxtLink
              v-for="(category, index) in categories"
              :key="category._id"
              :to="`/menu/${category?.slug}`"
              :class="`array-${index}`"
            >
              <BaseCard :title="category.name" :cover="category.cover" />
            </NuxtLink>

            <!-- <CategoryCard v-for="category in categories" :key="category._id" :category="category" /> -->
          </section>
        </section>
      </template>
    </MainSection>
  </main>
</template>
