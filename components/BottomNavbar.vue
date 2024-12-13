<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types';

const links: HorizontalNavigationLink[] = [
  {
    label: 'Menu',
    icon: 'i-heroicons-clipboard-document-list-solid',
    to: '/menu',
  },
  {
    label: 'Events',
    icon: 'i-heroicons-calendar-days-solid',
    to: '/events',
  },
  {
    label: 'Survey',
    icon: 'i-heroicons-clipboard-document-check-solid',
    to: '/survey',
  },
  {
    label: 'About',
    icon: 'i-heroicons-building-storefront-solid',
    to: '/',
  },
];
</script>

<template>
  <section class="fixed bottom-0 z-[49] w-full shadow bg-gray-100">
    <UHorizontalNavigation
      :ui="{
        base: 'flex-col',
        container: 'justify-between w-full',
        inner: 'flex-1',
        inactive: 'text-gray-400',
        icon: { inactive: 'text-gray-400' },
      }"
      :links="links"
    />
  </section>
</template>
