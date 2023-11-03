<script setup lang="ts">
import { sidebarLinks } from '@/utils/sidebarLinks';
import type { SidebarLink } from '@/types/SidebarLink';

const links: SidebarLink[] = sidebarLinks;
</script>

<template>
  <ul
    class="flex w-1/6 fixed flex-col min-h-screen bg-base-100 border-r dark:border-base-100/10 dark:bg-dark-strong justify-between gap-2 px-6"
  >
    <li class="lg:pt-4 flex flex-col gap-0">
      <Logo />

      <ul class="flex flex-col gap-2 mt-4">
        <li v-for="{ href, icon, title } in links" :key="title">
          <NuxtLink
            :to="href"
            class="flex items-center gap-2 py-2 dark:text-base-100"
            active-class="text-accent px-4 dark:text-primary bg-accent/20 dark:bg-primary/10 rounded-lg font-bold transition-all"
          >
            <Icon class="text-2xl" :name="icon" />
            <span class="text-sm">{{ title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
