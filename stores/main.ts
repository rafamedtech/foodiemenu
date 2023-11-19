import { defineStore } from 'pinia';
import { allQuestions } from '@/sanity/queries';

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(true);
  const openModal = ref(false);

  const showScrollToTop = ref(false);

  const surveyData = reactive<Survey>({
    name: '',
    email: '',
    waiter: 'No lo sé',
    comments: '',
    questions: [],
    new: true,
  });

  async function getQuestions() {
    const { data: questions } = await useSanityQuery<Question[]>(allQuestions);
    surveyData.questions = questions.value;
  }

  return { isLoading, openModal, showScrollToTop, surveyData, getQuestions };
});
