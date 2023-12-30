import { z } from 'zod';

export const createRegisterFormSchema = z.object({
  name: z.string().min(3).max(160),
  login: z.string().min(4).max(25),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  image: z.string().optional(),
  role: z.enum(['FULL_ACCESS', 'VIEWER', 'MASTER', 'EDITOR']).optional(),
});

export type CreateRegisterFormData = z.infer<typeof createRegisterFormSchema>;
