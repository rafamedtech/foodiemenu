<script setup lang="ts">
import noItems from '@/assets/img/no-items.svg';
import { currentCategory } from '@/sanity/queries';

const store = useMainStore();
const { isLoading, showScrollToTop } = storeToRefs(store);

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 150;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  isLoading.value = false;
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const route = useRoute();
const [slug] = route.params.slug;

const sanity = useSanity();
const { data: category } = await useAsyncData(`${slug}`, () =>
  sanity.fetch<Category | null>(currentCategory, { slug })
);
</script>

<template>
  <main>
    <MainSection :loading="isLoading">
      <template #heading>
        <AppHeading :title="category?.name" :cover="category?.cover" class="title-heading" />
      </template>

      <template #content>
        <section class="relative">
          <section
            v-if="!category?.sections"
            class="flex flex-col justify-center items-center min-h-[60vh] px-4 content"
          >
            <img :src="noItems" class="max-w-full mb-8" alt="" />
            <p class="text-lg dark:text-base-100">No hay nada aquí aún.</p>
          </section>

          <section v-else class="my-4 pb-16 lg:grid lg:grid-cols-2 lg:gap-8 content">
            <div v-for="section in category?.sections" :key="section._id">
              <SectionBanner :section="section" />
              <SectionItems
                :items="section.items"
                :one-column="category?.sections.length ? category?.sections.length <= 1 : false"
              />
            </div>
          </section>

          <section
            class="fixed bottom-20 lg:bottom-8 flex-row p-2 gap-4 right-4 lg:right-8 card shadow-md text-primary bg-primary/20"
          >
            <Icon name="icon-park-outline:arrow-left" size="32" @click="navigateTo('/menu')" />
            <Icon
              v-if="showScrollToTop"
              name="icon-park-outline:arrow-up"
              size="32"
              @click="scrollToTop"
            />
          </section>
          <!-- <ScrollToTop /> -->
        </section>
      </template>
    </MainSection>
  </main>
</template>
