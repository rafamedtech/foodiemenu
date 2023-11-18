import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { survey } = await readBody(event);

  assertMethod(event, ['POST']);

  return prisma.survey.create({
    include: {
      questions: true,
    },
    data: {
      ...survey,
      questions: {
        create: survey.questions,
      },
    },
  });
});
