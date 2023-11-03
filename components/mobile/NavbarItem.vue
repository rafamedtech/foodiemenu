<script setup lang="ts">
import type { SidebarLink } from '~/types/SidebarLink';

interface Props {
  item: SidebarLink;
}
defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="item.href"
    class="dark:text-gray-300"
    active-class="text-accent dark:text-primary bg-accent/10 dark:bg-primary/10 rounded-lg font-bold "
  >
    <Icon :name="item.icon" class="text-xl" />
    <span class="btm-nav-label text-xs">{{ item.title }}</span>
  </NuxtLink>
</template>
