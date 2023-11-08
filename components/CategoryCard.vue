<script setup lang="ts">
const { category } = defineProps<{
  category: Category | null;
}>();
</script>

<template>
  <NuxtLink
    :to="`/menu/${category?.slug}`"
    class="card w-full lg:w-[30rem] mx-auto relative h-[35rem] lg:h-[20rem] lg:mb-12 shadow-xl group"
  >
    <figure class="h-full w-full overflow-hidden absolute rounded-2xl z-0">
      <img
        :src="category?.cover"
        :alt="category?.name"
        class="lg:group-hover:scale-[1.20] object-cover transition-all w-full h-full brightness-75 dark:brightness-50"
      />
    </figure>
    <div class="card-body p-0 z-10 bottom-6 absolute left-6">
      <h2
        class="card-title text-accent dark:text-primary text-2xl bg-accent/20 dark:bg-primary/10 shadow-sm w-fit p-2 rounded-lg"
      >
        {{ category?.name }}
      </h2>
    </div>
  </NuxtLink>
</template>
