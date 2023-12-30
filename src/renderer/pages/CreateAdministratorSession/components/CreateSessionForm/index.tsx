import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/Input';
import {
  createSessionFormSchema,
  CreateSessionFormData,
} from '@schemas/createSessionFormSchema';
import { useCreateAdministratorSession } from '@hooks/useCreateAdministratorSession';
import { useRoutes } from '@hooks/useRoutes';

export function CreateSessionForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<CreateSessionFormData>({
    resolver: zodResolver(createSessionFormSchema),
  });

  const { handleLogin } = useCreateAdministratorSession();
  const { navigate } = useRoutes();

  async function handleCreateSession(data: CreateSessionFormData) {
    const loggedIn = await handleLogin(data);

    if (loggedIn) {
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit(handleCreateSession)}>
      <Input.Root>
        <Input.Header>
          <Input.Label>Login</Input.Label>
          <Input.Error>{errors.login?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('login')} />
        </Input.Input>
      </Input.Root>

      <Input.Root>
        <Input.Header>
          <Input.Label>password</Input.Label>
          <Input.Error>{errors.password?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('password')} />
        </Input.Input>
      </Input.Root>

      <button type="submit" disabled={!isDirty ?? isSubmitting}>
        Logar
      </button>
    </form>
  );
}
