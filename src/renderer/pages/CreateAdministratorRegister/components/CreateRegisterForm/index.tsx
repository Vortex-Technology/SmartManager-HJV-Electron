import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@components/Input';
import {
  CreateRegisterFormData,
  createRegisterFormSchema,
} from '@schemas/createRegisterFormSchema';

export function CreateRegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<CreateRegisterFormData>({
    resolver: zodResolver(createRegisterFormSchema),
  });

  function handleRegisterAdministrator(data: CreateRegisterFormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleRegisterAdministrator)}>
      <Input.Root>
        <Input.Header>
          <Input.Label>name</Input.Label>
          <Input.Error>{errors.name?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('name')} />
        </Input.Input>
      </Input.Root>

      <Input.Root>
        <Input.Header>
          <Input.Label>login</Input.Label>
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

      <Input.Root>
        <Input.Header>
          <Input.Label>image</Input.Label>
          <Input.Error>{errors.image?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('image')} />
        </Input.Input>
      </Input.Root>

      <Input.Root>
        <Input.Header>
          <Input.Label>role</Input.Label>
          <Input.Error>{errors.role?.message}</Input.Error>
        </Input.Header>
        <Input.Input>
          <Input.TextInput {...register('role')} />
        </Input.Input>
      </Input.Root>
      <button type="submit" disabled={!isDirty ?? isSubmitting}>
        Cadastrar
      </button>
    </form>
  );
}
