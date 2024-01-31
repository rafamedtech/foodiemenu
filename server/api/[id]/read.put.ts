import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  // const { invoice } = await readBody(event);
  const { id }: any = event.context.params;

  assertMethod(event, ['PUT']);

  // Update invoice with prisma

  const invoiceToUpdate = await prisma.survey.update({
    where: {
      id,
    },
    data: {
      new: false,
    },
  });

  if (!invoiceToUpdate) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Invoice not found',
    });
  }

  return {
    invoiceToUpdate,
  };
});
