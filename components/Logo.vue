<script setup lang="ts">
import { restInfo } from '@/utils/restInfo';

const { name, description, icon } = restInfo;
</script>

<template>
  <div class="flex items-center gap-2 rounded-lg">
    <Icon :name="icon" class="text-accent dark:text-primary" size="40" />
    <div class="text-base-100 text-2xl italic flex flex-col items-start">
      <span>{{ name }}</span>
      <span class="text-lg lg:text-sm">{{ description }}</span>
    </div>
  </div>
</template>
