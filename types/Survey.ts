type Question = {
  id?: number;
  text: string;
  rating?: number | null;
};

interface SurveyData {
  name: string;
  email: string;
  waiter: string;
  questions: Question[];
  comments: string;
}
