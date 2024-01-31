// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/sanity',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/supabase',
  ],

  css: ['@/assets/css/tailwind.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  sanity: {
    projectId: 'voo7gajt',
    dataset: 'production',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  supabase: {
    redirect: false,
  },
});
