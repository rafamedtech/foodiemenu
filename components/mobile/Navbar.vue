<script setup>
import { sidebarLinks } from '@/utils/sidebarLinks';
</script>

<template>
  <div class="flex w-screen max-w-full justify-center lg:hidden">
    <div
      class="btm-nav z-[999] bg-[#FEFEFE] dark:bg-dark-strong max-w-full border-t dark:border-base-100/10"
    >
      <MobileNavbarItem v-for="link in sidebarLinks" :item="link" :key="link.id" />
    </div>
  </div>
</template>
