<script setup lang="ts">
import { restInfo } from '@/utils/restInfo';

const { logo } = restInfo;
</script>

<template>
  <div class="flex items-center gap-2 rounded-lg">
    <img :src="logo" alt="Restaurant logo" class="w-20" />
    <!-- <div class="text-base-100 text-2xl italic flex flex-col items-start">
      <span>{{ name }}</span>
      <span class="text-lg lg:text-sm">{{ description }}</span>
    </div> -->
  </div>
</template>
