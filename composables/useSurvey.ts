import type { SurveyWithQuestions } from '@/types/Survey';

export function useSurveyDataAnalyzer(surveyData: SurveyWithQuestions[] | null) {
  const uniqueQuestions = computed(() => {
    const questionsSet = new Set();
    surveyData?.forEach((entry: SurveyWithQuestions) => {
      entry.questions.forEach((question) => {
        questionsSet.add(question.text);
      });
    });
    return Array.from(questionsSet);
  });

  const questionAverages = computed(() => {
    const questionRatings: any = {};

    surveyData?.forEach((entry: SurveyWithQuestions) => {
      entry.questions.forEach((question) => {
        const text = question.text;
        const rating = question.rating;

        if (!questionRatings[text]) {
          questionRatings[text] = {
            total: 0,
            count: 0,
          };
        }

        questionRatings[text].total += rating;
        questionRatings[text].count += 1;
      });
    });

    const averages: any = {};
    Object.keys(questionRatings).forEach((text) => {
      const total = questionRatings[text].total;
      const count = questionRatings[text].count;
      averages[text] = total / count;
    });

    return averages;
  });

  const questionResults = computed(() => {
    const result: any = [];

    uniqueQuestions.value.forEach((question: any) => {
      result.push({
        question: question,
        averageRating: questionAverages.value[question] || 0,
      });
    });

    return result;
  });

  return {
    questionResults,
  };
}

interface WaiterSummary {
  waiter: string;
  count: number;
  averageRating: number;
}

export function useCalculateWaiterSummary(surveyData: SurveyWithQuestions[] | null) {
  return computed(() => {
    const waiterSummary: Record<string, { total: number; count: number }> = {};

    surveyData?.forEach((entry: SurveyWithQuestions) => {
      const waiter = entry.waiter;
      const rating = entry.questions.length > 0 ? entry.questions[0].rating : 0;

      if (!waiterSummary[waiter]) {
        waiterSummary[waiter] = {
          total: 0,
          count: 0,
        };
      }

      waiterSummary[waiter].total += rating;
      waiterSummary[waiter].count += 1;
    });

    const result: WaiterSummary[] = [];
    Object.keys(waiterSummary).forEach((waiter) => {
      const total = waiterSummary[waiter].total;
      const count = waiterSummary[waiter].count;
      result.push({
        waiter,
        count,
        averageRating: count > 0 ? total / count : 0,
      });
    });

    return result;
  });
}

export function useCalculateAverageRating(resultArray: any) {
  return computed(() => {
    const totalRating = resultArray.value.reduce(
      (total: any, item: any) => total + item.averageRating,
      0
    );
    const totalCount = resultArray.value.length;

    return totalCount > 0 ? totalRating / totalCount : 0;
  });
}
