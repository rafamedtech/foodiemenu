<script setup lang="ts">
interface Props {
  subheader?: string;
}

const { subheader = 'Administrador' } = defineProps<Props>();
</script>

<template>
  <div class="sticky top-0 z-[49] p-4 shadow bg-gray-100">
    <div class="flex items-center">
      <img src="assets/img/logo-new.svg" alt="Restaurant logo" class="w-20" />
      <div class="flex flex-col">
        <NuxtLink to="/" class="text-2xl">FoodieMenu</NuxtLink>
        <!-- <span class="italic">{{ subheader }}</span> -->
      </div>
    </div>
  </div>
</template>
