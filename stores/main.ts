import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(true);
  const openModal = ref(false);

  const showScrollToTop = ref(false);

  return { isLoading, openModal, showScrollToTop };
});
