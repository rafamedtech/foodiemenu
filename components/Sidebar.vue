<script setup lang="ts">
import { sidebarLinks } from '@/utils/sidebarLinks';

const links: SidebarLink[] = sidebarLinks;

const supabase = useSupabaseClient();

async function userLogout() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  } catch (error: any) {
    console.log(error.message);
  }
}
</script>

<template>
  <ul
    class="flex w-1/6 fixed flex-col min-h-screen border-r dark:border-base-100/10 bg-dark-strong justify-between gap-2 px-6"
  >
    <li class="lg:pt-4 flex flex-col gap-0">
      <Logo />

      <Divider sidebar />

      <ul class="flex flex-col gap-2">
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
        <li><button class="btn btn-primary" @click="userLogout">Logout</button></li>
      </ul>
    </li>
  </ul>
</template>
