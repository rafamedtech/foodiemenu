import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(true);

  return { isLoading };
});
