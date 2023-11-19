import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  return prisma.survey.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  });
});
