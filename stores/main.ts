import { defineStore } from 'pinia';
import { allQuestions } from '@/sanity/queries';
import type { SurveyOutline, SurveyWithQuestions } from '@/types/Survey';

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(true);
  const openModal = ref(false);
  const eventModal = ref(false); // Should be true in production

  const showScrollToTop = ref(false);

  const surveyData = reactive<SurveyOutline>({
    name: '',
    email: '',
    waiter: 'No lo sé',
    comments: '',
    questions: [],
    new: true,
  });

  async function getQuestions() {
    const { data: questions } = await useSanityQuery<SurveyWithQuestions[]>(allQuestions);
    surveyData.questions = questions.value;
  }

  return { isLoading, openModal, eventModal, showScrollToTop, surveyData, getQuestions };
});
