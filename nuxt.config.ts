// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/sanity', '@vueuse/nuxt', '@pinia/nuxt'],
  css: ['@/assets/css/tailwind.css'],

  sanity: {
    projectId: 'voo7gajt',
    dataset: 'production',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },
});
