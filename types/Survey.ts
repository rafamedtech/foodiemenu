import type { Survey, Question } from '@prisma/client';

export type SurveyWithQuestions = Survey & {
  questions: Question[];
};

export interface SurveyOutline {
  name: string;
  email: string;
  waiter: string;
  comments: string;
  new: boolean;
  questions?: Question[];
}
