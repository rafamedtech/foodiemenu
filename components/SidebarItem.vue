<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router';

defineProps<{
  href: RouteLocationRaw | undefined;
  icon: string;
  title: string;
}>();
</script>

<template>
  <li>
    <NuxtLink :to="href" active-class="bg-base-100">
      <Icon :name="icon" size="24" />
      <span>{{ title }}</span>
    </NuxtLink>
  </li>
</template>
