import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/Input';
import {
  createSessionFormSchema,
  CreateSessionFormData,
} from '@schemas/createSessionFormSchema';
import { useCreateSellerSession } from '@hooks/useCreateSellerSession';
import { useRoutes } from '@hooks/useRoutes';
import { Button } from '@components/Button';

export function CreateSessionForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<CreateSessionFormData>({
    resolver: zodResolver(createSessionFormSchema),
  });

  const { handleLogin } = useCreateSellerSession();
  const { navigate } = useRoutes();

  async function handleCreateSession(data: CreateSessionFormData) {
    const loggedIn = await handleLogin(data);

    if (loggedIn) {
      navigate('/');
    }
  }

  return (
    <form
      className="flex flex-col h-full justify-center gap-3 max-w-md mx-auto max-lg:pb-40"
      onSubmit={handleSubmit(handleCreateSession)}
    >
      <span className="font-bold text-2xl mb-10 opacity-70 ">
        Login de vendedor
      </span>

      <Input.Root>
        <Input.Header>
          <Input.Label className="opacity-70 text-xs">Usuário</Input.Label>
          <Input.Error>{errors.login?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('login')} />
        </Input.Input>
      </Input.Root>

      <Input.Root>
        <Input.Header>
          <Input.Label className="opacity-70 text-xs">Senha</Input.Label>
          <Input.Error>{errors.password?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('password')} />
        </Input.Input>
      </Input.Root>

      <Button.Root
        className="bg-primary-700 hover:bg-primary-800 mt-6"
        type="submit"
        disabled={!isDirty ?? isSubmitting}
      >
        <Button.Text>Logar</Button.Text>
      </Button.Root>

      <div className="flex justify-between">
        <button
          className="text-xs font-bold opacity-70 hover:opacity-100 hover:scale-105 ease-in-out duration-200 "
          type="button"
          onClick={() => navigate(`/`)}
        >
          Voltar ao inicio
        </button>

        <button
          className="text-xs font-bold opacity-70 hover:opacity-100 hover:scale-105 ease-in-out duration-200 "
          type="button"
          onClick={() => navigate(`/`)}
        >
          Esqueci minha senha
        </button>
      </div>
    </form>
  );
}
