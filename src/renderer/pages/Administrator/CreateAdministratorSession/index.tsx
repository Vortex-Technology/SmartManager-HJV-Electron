import { Logo } from '@components/Logo';
import { Welcome } from '@components/Welcome';
import { CreateSessionForm } from './components/CreateSessionForm';

export function CreateAdministratorSessionPage() {
  return (
    <main className="flex justify-between h-screen w-screen max-lg:flex-col max-lg:overflow-y-auto">
      <div className="bg-tertiary-700 w-full flex flex-col p-16 shadow-2xl gap-6">
        <Logo color="invert" />
        <Welcome />
      </div>

      <div className="w-full p-10">
        <CreateSessionForm />
      </div>
    </main>
  );
}
