import { z } from 'zod';

export const createSessionFormSchema = z.object({
  login: z.string().min(4, 'minimo 4 caracteres'),
  password: z.string().min(8, 'minimo 8 caracteres'),
});

export type CreateSessionFormData = z.infer<typeof createSessionFormSchema>;
