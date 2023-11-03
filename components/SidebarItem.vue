<script setup lang="ts">
import { RouteLocationRaw } from '#vue-router';

interface Props {
  href: RouteLocationRaw | undefined;
  icon: String;
  title: String;
}

defineProps<Props>();
</script>

<template>
  <li>
    <NuxtLink :to="href" active-class="bg-base-100">
      <Icon :name="icon" size="24" />
      <span>{{ title }}</span>
    </NuxtLink>
  </li>
</template>
