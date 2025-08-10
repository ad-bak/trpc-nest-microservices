import { z } from 'zod';

export const paymentSchema = z.object({
  id: z.string().uuid(),
  number: z.number(),
  expiratio: z.string(),
});

export type Payment = z.infer<typeof paymentSchema>;
