<script setup lang="ts">
import { allEvents } from '@/sanity/queries';
import type { Event } from '@/types/Event';

const store = useMainStore();
const { isLoading } = storeToRefs(store);

const { data: events } = useSanityQuery<Event[]>(allEvents);

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <MainSection :loading="isLoading">
    <template #heading>
      <AppHeading title="Eventos" description="Esta es la descripción de los eventos" />
    </template>

    <template #content>
      <section class="w-full">
        <div class="container rounded-box lg:p-4 pb-8 grid gap-10 lg:grid-cols-2 max-w-4xl">
          <EventCard v-for="event in events" :key="event._id" :event="event" />
        </div>
      </section>
    </template>
  </MainSection>
</template>
