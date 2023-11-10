<script setup lang="ts">
import type { Event } from '@/types/Event';

const { event } = defineProps<{
  event: Event;
}>();
const { name, description, cover } = event;
</script>

<template>
  <div
    class="flex-col artboard phone-1 lg:px-0 group mx-auto md:w-[22rem] relative h-[40rem] md:mb-20 shadow-xl group"
  >
    <img
      class="rounded-2xl h-full w-full absolute md:mx-auto object-cover z-10 dark:brightness-50 group-hover:brightness-[.25] transition-all"
      :src="cover"
      alt=""
    />
    <section
      class="invisible group-hover:visible scale-95 max-w-full group-hover:scale-100 transition-all z-[999] relative p-8 flex flex-col justify-center h-full"
    >
      <h2 class="text-center text-2xl font-bold uppercase text-primary">
        {{ name }}
      </h2>
      <p class="text-base-100">{{ description }}</p>
    </section>
  </div>
</template>
