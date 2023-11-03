<script setup lang="ts">
import type { Section } from '@/types/Menu';

const { section } = defineProps<{
  section: Section;
}>();
</script>

<template>
  <div
    class="relative section-banner rounded-lg shadow-pinterest dark:section-banner-dark flex h-32 w-full flex-col justify-center py-2 lg:h-40 lg:rounded-xl lg:shadow-xl"
  >
    <img
      v-if="section.cover"
      :src="section.cover"
      alt=""
      class="absolute inset-0 h-full w-full rounded-lg object-cover brightness-50"
    />

    <h2
      class="z-10 text-center font-handlee text-2xl uppercase"
      :class="{ 'text-accent dark:text-primary': !section.cover, 'text-base-100': section.cover }"
    >
      {{ section.name }}
    </h2>
    <p
      class="text-center z-10 font-handlee text-lg font-extralight text-gray-50"
      v-if="section.description"
    >
      {{ section.description }}
    </p>
  </div>
</template>
