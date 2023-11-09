<script setup lang="ts">
import { allEvents } from '@/sanity/queries';
import type { Event } from '@/types/Event';

const store = useMainStore();
const { isLoading } = storeToRefs(store);

const { data: events } = useSanityQuery<Event[]>(allEvents);

const { myAnimations } = useAnimations();

onMounted(() => {
  isLoading.value = false;
  // myAnimations();
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
          title="Eventos"
          description="Esta es la descripción de los eventos"
          class="title-heading"
        />
      </template>

      <template #content>
        <section
          class="container rounded-box lg:p-4 pb-8 grid gap-8 md:gap-2 md:grid-cols-2 max-w-4xl content"
        >
          <EventCard v-for="event in events" :key="event._id" :event="event" />
        </section>
      </template>
    </MainSection>
  </main>
</template>
