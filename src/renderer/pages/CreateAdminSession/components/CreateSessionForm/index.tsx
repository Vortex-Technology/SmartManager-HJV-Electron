import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const createSessionFormSchema = z.object({
  login: z.string().min(4, ' minimo  caracter'),
  password: z.string().min(8, ' minimo caracter'),
});

type CreateSessionFormData = z.infer<typeof createSessionFormSchema>;

export function CreateSessionForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<CreateSessionFormData>({
    resolver: zodResolver(createSessionFormSchema),
  });

  function handleCreateSession(data: CreateSessionFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleCreateSession)}>
      {errors.login?.message}
      {errors.password?.message}
      <input type="text" {...register('login')} />
      <input type="password" {...register('password')} />
      <button type="submit" disabled={!isDirty ?? isSubmitting}>
        Logar
      </button>
    </form>
  );
}
