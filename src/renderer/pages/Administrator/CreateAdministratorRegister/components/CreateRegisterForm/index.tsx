import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/Input';
import {
  CreateRegisterFormData,
  createRegisterFormSchema,
} from '@schemas/createRegisterFormSchema';
import { useCreateAdministratorRegister } from '@hooks/useCreateAdministratorRegister';
import { useRoutes } from '@hooks/useRoutes';
import { Button } from '@components/Button';
import { Select } from '@components/Select';
import { AdministratorRole } from '@entities/Administrator';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function CreateRegisterForm() {
  const [isToShowPassword, setIsToShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
    setValue,
    setError,
  } = useForm<CreateRegisterFormData>({
    resolver: zodResolver(createRegisterFormSchema),
  });

  const { navigate } = useRoutes();
  const { handlerRegister } = useCreateAdministratorRegister();

  async function handleRegisterAdministrator(data: CreateRegisterFormData) {
    if (data.password !== data.confirmPassword) {
      setError('password', {
        message: 'As senhas precisam ser iguais',
      });

      return;
    }

    const registered = await handlerRegister(data);

    if (registered) {
      navigate('/');
    }
  }

  function handleChangeRoleSelected(role: AdministratorRole) {
    setValue('role', role);
  }

  return (
    <form
      className="flex flex-col h-full justify-center gap-3 max-w-md mx-auto max-lg:pb-40"
      onSubmit={handleSubmit(handleRegisterAdministrator)}
    >
      <span className="font-bold text-2xl mb-10 opacity-70 ">
        Registro de administrador
      </span>

      <Input.Root>
        <Input.Header>
          <Input.Label className="opacity-70 text-xs">Nome</Input.Label>
          <Input.Error>{errors.name?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('name')} />
        </Input.Input>
      </Input.Root>

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
          <Input.TextInput
            type={isToShowPassword ? 'text' : 'password'}
            {...register('password')}
          />
          <Input.Icon asChild>
            <button
              type="button"
              onClick={() => setIsToShowPassword(!isToShowPassword)}
            >
              {isToShowPassword ? <Eye /> : <EyeOff />}
            </button>
          </Input.Icon>
        </Input.Input>
      </Input.Root>

      <Input.Root>
        <Input.Header>
          <Input.Label className="opacity-70 text-xs">
            Confirmar senha
          </Input.Label>
          <Input.Error>{errors.password?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput
            type={isToShowPassword ? 'text' : 'password'}
            {...register('confirmPassword')}
          />
          <Input.Icon asChild>
            <button
              type="button"
              onClick={() => setIsToShowPassword(!isToShowPassword)}
            >
              {isToShowPassword ? <Eye /> : <EyeOff />}
            </button>
          </Input.Icon>
        </Input.Input>
      </Input.Root>

      {/* <Input.Root>
        <Input.Header>
          <Input.Label className="opacity-70 text-xs">image</Input.Label>
          <Input.Error>{errors.image?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('image')} />
        </Input.Input>
      </Input.Root> */}

      <Input.Root>
        <Input.Header>
          <Input.Label className="opacity-70 text-xs">
            Nível de acesso
          </Input.Label>
          <Input.Error>{errors.role?.message}</Input.Error>
        </Input.Header>

        <Select.Root
          onValueChange={(role) => {
            handleChangeRoleSelected(role as AdministratorRole);
          }}
        >
          <Input.Input>
            <Select.Trigger>
              <Select.Value placeholder="Nível de acesso" />
            </Select.Trigger>
          </Input.Input>

          <Select.Content>
            <Select.Item value="FULL_ACCESS">Acesso total</Select.Item>
            <Select.Item value="EDITOR">Pode editar elementos</Select.Item>
            <Select.Item value="VIEWER">Pode visualizar elementos</Select.Item>
          </Select.Content>
        </Select.Root>
      </Input.Root>

      <Button.Root
        className="bg-primary-700 hover:bg-primary-800 mt-6"
        type="submit"
        disabled={!isDirty ?? isSubmitting}
      >
        <Button.Text>Cadastrar</Button.Text>
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
          Já está registrado
        </button>
      </div>
    </form>
  );
}
