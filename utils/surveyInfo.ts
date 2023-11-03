import type { SurveyQuestion } from '@/types/Survey';

export const waitersList = ['No lo sé', 'Diego Vargas', 'Giovanny Gómez', 'Christian Pérez'];

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    text: 'La bienvenida por parte de nuestro mesero fue:',
    options: ['mala', 'regular', 'buena', 'excelente'],
  },
  {
    id: 2,
    text: 'La calidad y temperatura de los alimentos fue:',
    options: ['mala', 'regular', 'buena', 'excelente'],
  },
  {
    id: 3,
    text: 'La calidad de sus bebidas fue:',
    options: ['mala', 'regular', 'buena', 'excelente'],
  },
  {
    id: 4,
    text: 'La limpieza del restaurante la considera:',
    options: ['mala', 'regular', 'buena', 'excelente'],
  },
  {
    id: 5,
    text: '¿Cómo califica nuestro servicio?',
    options: ['malo', 'regular', 'bueno', 'excelente'],
  },
];
