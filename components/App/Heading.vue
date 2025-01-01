<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
}

const { title, description } = defineProps<Props>();
</script>

<template>
  <div class="h-full py-4">
    <section class="h-full md:p-2">
      <h1 class="text-primary font-bold w-fit text-3xl md:text-4xl">
        {{ title }}
      </h1>
      <span class="dark:text-gray-100">{{ description }}</span>
    </section>
  </div>
</template>
