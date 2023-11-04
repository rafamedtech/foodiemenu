type Question = {
  question: string;
  answer?: string | null;
};

interface SurveyData {
  name: string;
  email: string;
  waiter: string;
  questions: Question[];
}
