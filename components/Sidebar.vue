<script setup lang="ts">
import { sidebarLinks } from '@/utils/sidebarLinks';

const links: SidebarLink[] = sidebarLinks;
</script>

<template>
  <ul
    class="flex w-1/6 fixed flex-col min-h-screen border-r dark:border-base-100/10 bg-dark-strong justify-between gap-2 px-6"
  >
    <li class="lg:pt-4 flex flex-col gap-0">
      <Logo />

      <Divider sidebar />

      <ul class="flex flex-col gap-2 mt-4">
        <li v-for="{ href, icon, title } in links" :key="title">
          <NuxtLink
            :to="href"
            class="flex items-center gap-2 py-2 text-base-100"
            active-class=" px-4 text-primary bg-accent/20 dark:bg-primary/10 rounded-lg font-bold transition-all"
          >
            <Icon size="24" :name="icon" />
            <span class="text-sm">{{ title }}</span>
          </NuxtLink>
        </li>

        <Divider sidebar />

        <li><DarkLightBtn /></li>
      </ul>
    </li>
  </ul>
</template>
